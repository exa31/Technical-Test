import { useContext, useState } from "react"
import { NavLink } from "react-router-dom"
import { LoginContext } from "../context";
import Logout from "./Logout";
import Proptype from 'prop-types';

Sidebar.propTypes = {
    openNav: Proptype.bool
};

export default function Sidebar({ openNav }) {

    const isLogin = useContext(LoginContext).login;
    const [logout, setLogout] = useState(false);

    function handleLogout() {
        setLogout(!logout);
    }

    return (
        <>
            {logout ? <Logout handleLogout={handleLogout} /> : null}
            <div className="sticky top-0 z-10">
                <div className={openNav ? "flex flex-col w-40 duration-200 h-full min-h-screen md:block absolute pt-16 bg-base-300" : "flex flex-col md:w-40 w-0 absolute md:static  overflow-hidden h-full min-h-screen pt-16 bg-base-300 duration-200"}>
                    <NavLink className={({ isActive }) =>
                        isActive ? "btn btn-ghost btn-active" : 'btn btn-ghost'
                    } to="/">Product</NavLink>
                    <NavLink className={({ isActive }) =>
                        isActive ? "btn btn-ghost btn-active" : 'btn btn-ghost'} to="/categories">Category</NavLink>
                    <NavLink className={({ isActive }) =>
                        isActive ? "btn btn-ghost btn-active" : 'btn btn-ghost'} to="/orders">Order</NavLink>
                    <NavLink className={({ isActive }) =>
                        isActive ? "btn btn-ghost btn-active" : 'btn btn-ghost'} to="/users">User</NavLink>
                    {isLogin ?
                        <NavLink onClick={handleLogout} className={'btn btn-ghost'} to="?logout">Logout</NavLink>
                        :
                        <>
                            <NavLink className={({ isActive }) =>
                                isActive ? "btn btn-ghost btn-active" : 'btn btn-ghost'} to="/login">Login</NavLink>
                            <NavLink className={({ isActive }) =>
                                isActive ? "btn btn-ghost btn-active" : 'btn btn-ghost'} to="/register">Register</NavLink>
                        </>
                    }
                </div>
            </div>
        </>
    )
}