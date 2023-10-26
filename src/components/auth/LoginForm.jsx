import { Cookie } from '@mui/icons-material';
import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import jwt_decode from "jwt-decode";

function LoginForm() {
    const navigator = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await axios.post("http://localhost:3000/api/auth/login", {
                email: email,
                password: password,
            });
            localStorage.setItem('token', data.data.token);
            navigator("/");
        }
        catch (err) {
            console.log(err);
        }
    }
    return (
        <div>
            <form onSubmit={(e) => {
                handleSubmit(e);
            }} className='flex flex-col px-16 py-10 gap-3 shadow-2xl max-w-xl border border-gray-300 rounded-2xl'>
                <div>Hesabiniz yoxdur? <Link className='text-blue-300' to='/register'>Qeydiyyatdan kecin</Link></div>
                <label className="flex flex-col gap-2">
                    <div>E-Mail:</div>
                    <input type="email" className=' p-2 border border-gray-500 shadow-2xl bg-gray-200 ' onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label className="flex flex-col gap-2">
                    <div> Sifrə:</div>
                    <input type="password" className=' p-2 border border-gray-500 shadow-2xl bg-gray-200' onChange={(e) => setPassword(e.target.value)} />
                </label>
                <button className='bg-blue-500 shadow-lg rounded-md text-white p-3'>Gonder</button>
            </form>
        </div>
    )
}

export default LoginForm