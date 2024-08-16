import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/Input";
import { useState } from "react";
import { createCategory } from "../../api/categories";


export default function AddCategory() {

    const navigate = useNavigate();

    const [submit, setSubmit] = useState(false);
    const [error, setError] = useState();

    function handleSubmit(e) {
        e.preventDefault();
        setSubmit(true);
        const category = e.target.category.value;
        const errors = {
            category: false,
        };

        if (category < 2) {
            errors.category = true;
        }

        if (!errors.category) {
            const payload = { name: category };
            createCategory(payload).then((res) => {
                if (res.status === 201) {
                    navigate("/categories");
                } else {
                    alert("Failed to update category");
                    return setSubmit(false)
                }
            }).catch((err) => {
                console.log(err)
                return setSubmit(false)
            });
        } else {
            setSubmit(false)
            return setError(errors)
        }
    }

    return (
        <div className="w-full ">
            <form action="" onSubmit={handleSubmit} className="flex flex-col items-center w-full">
                <Input label="Name category" name="category" type="text" placeholder="Category" />
                {error?.category && <p className="text-red-500">Name category is required and minimal length 2</p>}
                <div className="flex justify-between pt-10 gap-72">
                    <Link to={-1} className="px-6 text-white rounded-xl btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-secondary btn">Back</Link>
                    <button type="submit" disabled={submit} className={submit ? "px-6 btn-xs sm:btn-sm md:btn-md lg:btn-lg text-white rounded-xl btn-primary btn-disabled cursor-not-allowed btn" : "px-6 btn-xs sm:btn-sm md:btn-md lg:btn-lg text-white rounded-xl btn-primary btn"}>Add</button>
                </div>
            </form>
        </div>
    )
}