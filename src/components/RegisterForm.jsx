import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function RegisterForm() {
    const navigator=useNavigate();
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleClear=()=>{
        setFullName('')
        setEmail('')
        setPassword('')
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = await axios.post("http://localhost:3000/api/auth/register", {
            fullName: fullName,
            email: email,
            password: password,
            memberAgreementVersion: "v1"
        });
        console.log(data);
        handleClear();
        navigator('/login');
    }
    return (
        <form onSubmit={(e) => handleSubmit(e)} className='flex flex-col px-16 py-10 gap-3 shadow-2xl max-w-xl border border-gray-300 rounded-2xl'>
            <div>Hesabiniz var? <Link className='text-blue-300' to='/login'>Login olun</Link></div>
            <label className="flex flex-col gap-2">
                <div>Istifadeci Adi:</div>
                <input type="text" value={fullName} className=' p-2 border border-gray-500 shadow-2xl bg-gray-200' onChange={(e) => setFullName(e.target.value)} />
            </label>
            <label className="flex flex-col gap-2">
                <div>E-Mail:</div>
                <input type="email" value={email} className=' p-2 border border-gray-500 shadow-2xl bg-gray-200 ' onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label className="flex flex-col gap-2">
                <div> Sifrə:</div>
                <input type="password" value={password} className=' p-2 border border-gray-500 shadow-2xl bg-gray-200' onChange={(e) => setPassword(e.target.value)} />
            </label>
            <button className='bg-blue-500 shadow-lg rounded-md text-white p-3' onClick={() => {
                console.log(fullName + " " + email + " " + password)
            }}>Gonder</button>
        </form>
    )
}

export default RegisterForm