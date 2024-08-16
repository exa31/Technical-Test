import { Link, useLoaderData } from "react-router-dom";
import { useState } from "react";
import Table from "../../components/TableCategories";
import { deleteCategory } from "../../api/categories";

export default function Categories() {
    const data = useLoaderData()
    const [categories, setCategories] = useState(data.categories);

    function handleDelete(id) {
        const newCategories = categories.filter((product) => product._id !== id);
        deleteCategory(id).then((res) => {
            if (res.status !== 200) {
                alert("Failed to delete category");
            } else {
                setCategories(newCategories);
            }
        });
    }

    return (
        <div className="w-full">
            <Table data={categories} handleDelete={handleDelete} />
            {categories.length === 0 && <p className="text-center">No categories available</p>}\
            <Link to={"/add-category"} className="px-6 my-8 text-white btn-xs sm:btn-sm md:btn-md lg:btn-lg rounded-xl btn-primary btn">Add Category</Link>
        </div>
    );
}
