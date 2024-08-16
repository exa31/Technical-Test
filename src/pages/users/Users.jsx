import { Link, useLoaderData } from "react-router-dom";
import Table from "../../components/TableUsers";
import { useState } from "react";
import { deleteUser } from "../../api/auth";

export default function Users() {
    const data = useLoaderData();

    const [users, setUsers] = useState(data.users);


    const handleDelete = (id) => {
        const newUsers = users.filter((user) => user._id !== id);
        deleteUser(id).then((res) => {
            if (res.status === 200) {
                setUsers(newUsers);
            } else {
                alert("Failed to delete user");
            }
        });
    };


    return (
        <div>
            <Table data={users} handleDelete={handleDelete} />
            {users.length === 0 && <p className="text-center">No users available</p>}
            <Link to={"/register"} className="px-6 my-8 text-white rounded-xl btn-primary btn">Add User</Link>
        </div>
    )
}