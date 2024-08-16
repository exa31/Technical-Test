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
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((product, index) => {
                        return (
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{product.name}</td>
                                <td>{product.category.name}</td>
                                <td>{product.price}</td>
                                <td>
                                    <Link to={`/edit-product/${product._id}`} className="btn btn-sm btn-ghost">Edit</Link>
                                    <button onClick={() => handleDelete(product._id)} className="btn btn-sm btn-ghost">Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}