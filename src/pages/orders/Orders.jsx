import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Table from "../../components/TableOrders";
import { deleteOrder } from "../../api/orders";

export default function Orders() {

    const data = useLoaderData();
    const [orders, setOrders] = useState(data.orders);

    function handleDelete(id) {
        const newOrders = orders.filter((order) => order._id !== id);
        deleteOrder(id).then((res) => {
            if (res.status !== 204) {
                alert("Failed to delete order");
            } else {
                setOrders(newOrders);
            }
        });
    }

    return (
        <div>
            <Table data={orders} handleDelete={handleDelete} />
            {orders.length === 0 && <p className="text-center">No orders available</p>}\
            <Link to={"/add-order"} className="px-6 my-8 text-white btn-xs sm:btn-sm md:btn-md lg:btn-lg rounded-xl btn-primary btn">Add Order</Link>
        </div>
    )
}