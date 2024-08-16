import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import Input from "../../components/Input";
import { useState } from "react";
import { updateCategory } from "../../api/categories";


export default function EditCategory() {

    const data = useLoaderData();
    const params = useParams();
    const navigate = useNavigate();


    const [error, setError] = useState();

    function handleSubmit(e) {
        e.preventDefault();
        const category = e.target.category.value;
        const errors = {
            category: false,
        };

        if (category < 2) {
            errors.category = true;
        }

        if (!errors.category) {
            const payload = { name: category };
            updateCategory(params.id, payload).then((res) => {
                if (res.status === 200) {
                    navigate("/categories");
                } else {
                    alert("Failed to update category");
                }
            });
        } else (
            setError(errors)
        )
    }

    return (
        <div className="w-full ">
            <form action="" onSubmit={handleSubmit} className="flex flex-col items-center w-full">
                <Input label="Name category" name="category" value={data.category.name} type="text" placeholder="Category" />
                {error?.category && <p className="text-red-500">Name category is required and minimal length 2</p>}
                <div className="flex justify-between pt-10 gap-72">
                    <Link to="/categories" className="px-6 text-white btn-xs sm:btn-sm md:btn-md lg:btn-lg rounded-xl btn-secondary btn">Back</Link>
                    <button type="submit" className="px-6 text-white btn-xs sm:btn-sm md:btn-md lg:btn-lg rounded-xl btn-primary btn ">Save</button>
                </div>
            </form>
        </div>
    )
}