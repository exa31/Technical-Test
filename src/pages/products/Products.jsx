import { Link, useLoaderData } from "react-router-dom";
import Table from "../../components/TableProducts";
import { useState } from "react";
import { deleteProduct } from "../../api/products";

export default function Products() {
    const data = useLoaderData()
    const [products, setProducts] = useState(data.products);


    function handleDelete(id) {
        const newProducts = products.filter((product) => product._id !== id);
        deleteProduct(id).then((res) => {
            if (res.status !== 200) {
                alert("Failed to delete product");
            } else {
                setProducts(newProducts);
            }
        });
    }

    return (
        <div className="w-full">
            <Table data={products} handleDelete={handleDelete} />
            {products.length === 0 && <p className="text-center">No products available</p>}\
            <Link to={"/add-product"} className="px-6 my-8 text-white rounded-xl btn-primary btn">Add Product</Link>
        </div>
    );
}
