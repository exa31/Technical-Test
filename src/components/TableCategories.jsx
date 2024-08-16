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
                    </tr>
                </thead>
                <tbody>
                    {data.map((category, index) => {
                        return (
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{category.name}</td>
                                <td>
                                    <Link to={`/edit-category/${category._id}`} className="btn btn-sm btn-ghost">Edit</Link>
                                    <button onClick={() => handleDelete(category._id)} className="btn btn-sm btn-ghost">Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}