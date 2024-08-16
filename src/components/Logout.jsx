import proptype from 'prop-types';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { LoginContext } from '../context';
import { logout } from '../api/auth';
import { useCookies } from 'react-cookie';


Logout.propTypes = {
    handleLogout: proptype.func,
}

export default function Logout({ handleLogout }) {

    const isLogin = useContext(LoginContext);

    const [cookies, setCookie, removeCookie] = useCookies(['token']);

    function handleClick() {
        const token = cookies.token
        logout(token).then(data => {
            console.log(data)
            if (data.status !== 200) {
                return alert('Failed to logout');
            }
            removeCookie('token');
            handleLogout();
            return isLogin.setLogin(false);
        })
    }


    return (
        <div className="fixed z-50 flex items-center justify-center w-full h-screen bg-black bg-opacity-75">
            <div className="flex flex-col border backdrop-blur-sm p-14 rounded-2xl gap-7">
                <h1 className="text-4xl text-center text-white">Are you sure to logout???😔</h1>
                <div className="mx-auto">
                    <button onClick={() => handleLogout()} className="px-6 py-2 m-2 text-white transition-all duration-200 bg-black border-2 hover:bg-slate-800">Close</button>
                    <Link to={""} onClick={handleClick} className="px-6 py-2 m-2 text-white transition-all duration-200 bg-black border-2 hover:bg-slate-800">Logout</Link>
                </div>
            </div>
        </div>
    )
}