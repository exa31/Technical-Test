import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/Input";
import { useState } from "react";
import { checkEmail } from "../../helper";
import { register } from "../../api/auth";
import TextArea from "../../components/TextArea";


export default function Register() {

    const navigate = useNavigate();

    const [submit, setSubmit] = useState(false);
    const [error, setError] = useState();

    function handleSubmit(e) {
        e.preventDefault();
        setSubmit(true);
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const phone_number = e.target.phone_number.value;
        const kelurahan = e.target.kelurahan.value;
        const kecamatan = e.target.kecamatan.value;
        const kota = e.target.kota.value;
        const provinsi = e.target.provinsi.value;
        const detail = e.target.detail.value;

        const errors = {
            name: false,
            email: false,
            password: false,
            phone_number: false,
            kelurahan: false,
            kecamatan: false,
            kota: false,
            provinsi: false,
            detail: false
        };

        if (name < 2) {
            errors.name = true;
        }

        if (!checkEmail(email)) {
            errors.email = true;
        }

        if (password < 8) {
            errors.password = true;
        }

        if (phone_number === "" || phone_number.length < 10) {
            errors.phone_number = true;
        }

        if (kelurahan === "" || kelurahan.length < 2) {
            errors.kelurahan = true;
        }

        if (kecamatan === "" || kecamatan.length < 2) {
            errors.kecamatan = true;
        }

        if (kota === "" || kota.length < 2) {
            errors.kota = true;
        }

        if (provinsi === "" || provinsi.length < 2) {
            errors.provinsi = true;
        }

        if (detail === "" || detail.length < 2) {
            errors.detail = true;
        }


        if (!errors.name && !errors.email && !errors.password && !errors.phone_number && !errors.kelurahan && !errors.kecamatan && !errors.kota && !errors.provinsi && !errors.detail) {
            const payload = { name, email, password, phone_number, address: { kelurahan, kecamatan, kota, provinsi, detail } };
            register(payload).then((res) => {
                if (res.status === 201) {
                    navigate("/users");
                } else {
                    alert("Failed to update product");
                    return setSubmit(false);
                }
            }).catch((err) => {
                console.log(err)
                return setSubmit(false)
            });
        } else {
            setSubmit(false)
            return setError(errors)
        }
    }

    return (
        <div className="w-full ">
            <form action="" onSubmit={handleSubmit} className="flex flex-col items-center w-full">
                <Input label="Name" name="name" type="text" placeholder="Name" />
                {error?.name && <p className="text-red-500">Name is required and minimal length 2</p>}
                <Input label="Email" type="" name="email" placeholder="Email" />
                {error?.email && <p className="text-red-500">Email is required </p>}
                <Input label="Password" type="password" name="password" placeholder="Password" />
                {error?.password && <p className="text-red-500">Password is required </p>}
                <Input label="Phone Number" type="number" name="phone_number" placeholder="Phone Number" />
                {error?.phone_number && <p className="text-red-500">Phone Number is required </p>}
                <Input label="Kelurahan" type="text" name="kelurahan" placeholder="Kelurahan" />
                {error?.kelurahan && <p className="text-red-500">Kelurahan is required </p>}
                <Input label="Kecamatan" type="text" name="kecamatan" placeholder="Kecamatan" />
                {error?.kecamatan && <p className="text-red-500">Kecamatan is required </p>}
                <Input label="Kota" type="text" name="kota" placeholder="Kota" />
                {error?.kota && <p className="text-red-500">Kota is required </p>}
                <Input label="Provinsi" type="text" name="provinsi" placeholder="Provinsi" />
                {error?.provinsi && <p className="text-red-500">Provinsi is required </p>}
                <TextArea label="Detail Address" name="detail" placeholder="Detail Address" />
                {error?.detail && <p className="text-red-500">Detail Address is required </p>}
                <div className="flex justify-between pt-10 gap-72">
                    <Link to="/users" className="px-6 text-white rounded-xl btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-secondary btn">Back</Link>
                    <button type="submit" disabled={submit} className={submit ? "px-6 btn-xs sm:btn-sm md:btn-md lg:btn-lg text-white rounded-xl btn-primary btn-disabled cursor-not-allowed btn" : "px-6 btn-xs sm:btn-sm md:btn-md lg:btn-lg text-white rounded-xl btn-primary btn"}>Add</button>
                </div>
            </form>
        </div>
    )
}