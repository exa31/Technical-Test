import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import { updateProduct } from "../../api/products";
import Input from "../../components/Input";
import Select from "../../components/Select";
import { useState } from "react";
import { containsNoDot } from "../../helper";


export default function EditProduct() {

    const data = useLoaderData();
    const params = useParams();
    const navigate = useNavigate();

    const [error, setError] = useState();

    function handleSubmit(e) {
        e.preventDefault();
        const name = e.target.name.value;
        const price = e.target.price.value;
        const category = e.target.category.value;
        const errors = {
            name: false,
            price: false,
            category: false,
        };

        if (name < 2) {
            errors.name = true;
        }

        if (price === "") {
            errors.price = true;
        }

        if (!containsNoDot(price)) {
            errors.price = true;
        }

        if (category === "Category") {
            errors.category = true;
        }

        if (!errors.name && !errors.price && !errors.category) {
            const payload = { name, price, category };
            updateProduct(params.id, payload).then((res) => {
                if (res.status === 200) {
                    navigate("/");
                } else {
                    alert("Failed to update product");
                }
            });
        } else (
            setError(errors)
        )
    }

    return (
        <div className="w-full ">
            <form action="" onSubmit={handleSubmit} className="flex flex-col items-center w-full">
                <Input label="Name product" name="name" value={data.product.product.name} type="text" placeholder="Name" />
                {error?.name && <p className="text-red-500">Name is required and minimal length 2</p>}
                <Input label="Price" type="number" name="price" value={data.product.product.price} placeholder="Price" />
                {error?.price && <p className="text-red-500">Price is required and not (.)</p>}
                <Select label="Category" name="category" value={data.product.product.category} options={data.categories.categories} />
                <div className="self-start pt-2 ps-5">
                    <p className="text-start">Want create category? <Link className="text-info" to={"/add-category"}>create</Link></p>
                </div>
                {error?.category && <p className="text-red-500">Category is required</p>}
                <div className="flex justify-between pt-10 gap-72">
                    <Link to="/" className="px-6 text-white rounded-xl btn-secondary btn">Back</Link>
                    <button type="submit" className="px-6 text-white rounded-xl btn-primary btn">Save</button>
                </div>
            </form>
        </div>
    )
}