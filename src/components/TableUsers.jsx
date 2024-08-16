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
                        <th>Email</th>
                        <th>password</th>
                        <th>Phone Number</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((user, index) => {
                        return (
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.password}</td>
                                <td>{user.phone_number}</td>
                                <td>Desa {user.address.kelurahan}, Kec.{user.address.kecamatan}, Kota/Kab. {user.address.kota}, Provinsi {user.address.provinsi} {user.address.detail}</td>
                                <td>
                                    <Link to={`/edit-user/${user._id}`} className="btn btn-sm btn-ghost">Edit</Link>
                                    <button onClick={() => handleDelete(user._id)} className="btn btn-sm btn-ghost">Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}