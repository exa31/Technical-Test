import { Link, useNavigate } from "react-router-dom";
import { login } from "../api/auth";
import Input from "../components/Input";
import { useCookies } from "react-cookie";
import { useContext, useEffect } from "react";
import { LoginContext } from "../context";

export default function Login() {

    const [cookie, setCookie] = useCookies(["token"]);
    const navigate = useNavigate();

    const loginContext = useContext(LoginContext);

    useEffect(() => {
        if (cookie.token) {
            navigate("/");
        }
    }, []);


    function handleSubmit(e) {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const data = { email, password };
        login(data).then((res) => {
            if (res.status === 200) {
                loginContext.setLogin(true);
                setCookie("token", res.token, { expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) });
                navigate("/");
            } else {
                console.log("Login failed");
                alert("Login failed");
            }
        })
    }

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="w-full max-w-md">
                <form onSubmit={handleSubmit} className="p-10 bg-base-200 rounded-3xl" action="">
                    <Input label="Email" name="email" type="email" placeholder="Email" />
                    <Input label="Password" name="password" type="password" placeholder="Password" />
                    <p>{"Don't have accont?"}<Link to="/register" className="text-primary ms-2">Register</Link></p>
                    <div className="flex justify-between mt-6">
                        <Link to={-1} className="px-8 btn rounded-2xl btn-secondary">Back</Link>
                        <button className="px-8 btn rounded-2xl btn-primary">Login</button>
                    </div>
                </form>
            </div>
        </div>
    )

}