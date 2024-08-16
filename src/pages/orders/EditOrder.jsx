import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import Input from "../../components/Input";
import Select from "../../components/Select";
import { useState } from "react";
import { containsNoDot } from "../../helper";
import { updateOrder } from "../../api/orders";


export default function EditOrder() {

    const data = useLoaderData();
    const params = useParams();
    const navigate = useNavigate();

    const [error, setError] = useState();

    function handleSubmit(e) {
        e.preventDefault();
        const user = e.target.user.value;
        const product = e.target.product.value;
        const quantity = e.target.quantity.value;
        const errors = {
            user: false,
            product: false,
            quantity: false
        };

        if (user === "Name user") {
            errors.user = true;
        }

        if (parseInt(quantity) === 0) {
            errors.quantity = true;
        }

        if (!containsNoDot(quantity)) {
            errors.quantity = true;
        }

        if (product === "Product") {
            errors.product = true;
        }

        if (!errors.user && !errors.product && !errors.quantity) {
            const product_id = data.products.products.filter((products) => products.name === product)[0]._id;
            const user_id = data.users.users.filter((users) => users.name === user)[0]._id;
            const payload = { user: user_id, product: product_id, quantity };
            updateOrder(params.id, payload).then((res) => {
                if (res.status === 200) {
                    navigate("/orders");
                } else {
                    alert("Failed to update product");
                }
            }).catch((err) => {
                console.log(err)
            });
        } else (
            setError(errors)
        )
    }

    return (
        <div className="w-full ">
            <form action="" onSubmit={handleSubmit} className="flex flex-col items-center w-full">
                <Select label="Name user" name="user" options={data.users.users} value={data.order.order.user} type="text" placeholder="Name User" />
                {error?.user && <p className="text-red-500">User is required </p>}
                <Select label="Product" name="product" value={data.order.order.product} options={data.products.products} />
                {error?.product && <p className="text-red-500">Product is required</p>}
                <Input label="Quantity" type="number" name="quantity" value={data.order.order.quantity} placeholder="Quantity" />
                {error?.quantity && <p className="text-red-500">Price is required and not (.)</p>}
                <div className="flex justify-between pt-10 gap-72">
                    <Link to="/" className="px-6 text-white btn-xs sm:btn-sm md:btn-md lg:btn-lg rounded-xl btn-secondary btn">Back</Link>
                    <button type="submit" className="px-6 text-white btn-xs sm:btn-sm md:btn-md lg:btn-lg rounded-xl btn-primary btn">Save</button>
                </div>
            </form>
        </div>
    )
}