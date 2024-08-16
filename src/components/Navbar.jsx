import Proptype from 'prop-types';

Navbar.propTypes = {
    setOpenNav: Proptype.func,
    openNav: Proptype.bool
};

export default function Navbar({ setOpenNav, openNav }) {
    return (
        <div onClick={() => setOpenNav(false)} className="fixed top-0 z-20 navbar bg-base-300">
            <div className="flex-none">
                <button onClick={(e) => {
                    e.stopPropagation();
                    setOpenNav(!openNav)
                }} className="flex justify-center  btn btn-square btn-ghost md:hidden">
                    {openNav ?
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        :
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="flex justify-center w-5 h-5 stroke-current">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    }
                </button>
            </div>
            <div className="flex-1">
                <a className="text-xl btn btn-ghost">Dashboard</a>
            </div>
        </div>
    )
}