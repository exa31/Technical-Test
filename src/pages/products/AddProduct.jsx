import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { createProduct } from "../../api/products";
import Input from "../../components/Input";
import Select from "../../components/Select";
import { containsNoDot } from "../../helper";
import { useState } from "react";


export default function AddProduct() {

    const data = useLoaderData();
    const navigate = useNavigate();

    const [error, setError] = useState();
    const [submit, setSubmit] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        setSubmit(true);
        const name = e.target.name.value;
        const price = e.target.price.value;
        const category = e.target.category.value;
        const payload = { name, price, category: category };

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
            createProduct(payload).then((res) => {
                if (res.status === 201) {
                    navigate("/");
                } else {
                    alert("Failed to create product");
                }
            });
        } else {
            setError(errors);
            setSubmit(false);
        }
    }

    return (
        <div className="w-full ">
            <form action="" onSubmit={handleSubmit} className="flex flex-col items-center w-full">
                <Input label="Name product" name="name" type="text" placeholder="Name" />
                {error?.name && <p className="text-red-500">Name must be at least 2 characters</p>}
                <Input label="Price" type="number" name="price" placeholder="Price" />
                {error?.price && <p className="text-red-500">Price is required and not (.)</p>}
                <Select label="Category" name="category" options={data.categories} />
                <div className="self-start pt-2 ps-5">
                    <p className="text-start">Want create category? <Link className="text-info" to={"/add-category"}>create</Link></p>
                </div>
                {error?.category && <p className="text-red-500">Category is required</p>}
                <div className="flex justify-between pt-10 gap-72">
                    <Link to="/" className="px-6 text-white rounded-xl btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-secondary btn">Back</Link>
                    <button type="submit" disabled={submit} className={submit ? "px-6 btn-xs sm:btn-sm md:btn-md lg:btn-lg text-white rounded-xl btn-primary btn-disabled cursor-not-allowed btn" : "px-6 btn-xs sm:btn-sm md:btn-md lg:btn-lg text-white rounded-xl btn-primary btn"}>Add</button>
                </div>
            </form>
        </div>
    )
}