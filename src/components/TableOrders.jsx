import { Link } from 'react-router-dom';
import proptype from 'prop-types';

Table.propTypes = {
    data: proptype.array,
    handleDelete: proptype.func
};

export default function Table({ data, handleDelete }) {
    return (
        <div className="overflow-x-auto">
            <table className="table table-zebra">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Name User</th>
                        <th>products</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((order, index) => {
                        return (
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{order.user.name}</td>
                                <td>{order.product.name}</td>
                                <td className='text-center'>{order.quantity}</td>
                                <td>
                                    <Link to={`/edit-order/${order._id}`} className="btn btn-sm btn-ghost">Edit</Link>
                                    <button onClick={() => handleDelete(order._id)} className="btn btn-sm btn-ghost">Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}