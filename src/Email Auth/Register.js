import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Register() {

    const[id,idchange] = useState("");
    const[name,namechange] = useState("");
    const[password,passwordchange] = useState("");
    const[email,emailchange] = useState("");
    const[phone,phonechange] = useState("");
    const[country,countrychange] = useState("");
    const[address,addresschange] = useState("");
    const[gender,genderchange] = useState("");

    const navigate = useNavigate();

    const handlesubmit = (e) =>{
        e.preventDefault();
        let regObj = {id,name,password,email,phone,country,address,gender}
        
        fetch("http://localhost:8000/user ",{
            method:"POST",
            headers:{'content-type':'application/json'},
            body:JSON.stringify(regObj)

        }).then((res)=>{
            alert('Registered Successfully')
            navigate('/login')
            
        }).catch((err)=>{
            alert('Failed:'+err.message)
        })
    }
    const handlecheck = (e) =>{
        navigate('/')
    }

    return (
        <div class="h-screen w-screen flex justify-center items-center bg-slate-100">
            <div className='w-full  p-10 rounded-lg xl:max-w-md dark:bg-gray-500 '>
                <form onSubmit={handlesubmit}>
                    {/* card header */}
                    <h1 className='text-2xl text-white'>User Registeration</h1>
                    {/* card body */}

                    <div className='reg-bar'>
                        <div className='input-bar'>
                            <input type="text" value={id} onChange={e=>idchange(e.target.value)} placeholder='Username' />
                        </div>
                        <div className='input-bar'>
                            <input type="password" value={password} onChange={e=>passwordchange(e.target.value)} placeholder='Password' />
                        </div>
                        <div className='input-bar'>
                            <input type="text" value={name} onChange={e=>namechange(e.target.value)} placeholder='Fullname' />
                        </div>
                        <div className='input-bar'>
                            <input type="email" value={email} onChange={e=>emailchange(e.target.value)} placeholder='Email' />
                        </div>
                        <div className='input-bar'>
                            <input type="number" value={phone} onChange={e=>phonechange(e.target.value)} placeholder='Phone' />
                        </div>

                        <select className='input-bar outline-none rounded-md' value={country} onChange={e=>countrychange(e.target.value)}>
                            <option value="Select">Select</option>
                            <option value="india">India</option>
                            <option value="usa">USA</option>
                            <option value="singapore">Singapore</option>
                        </select>
                        <div className='text-bar col-span-4'>
                            <textarea type="text" value={address} onChange={e=>addresschange(e.target.value)} placeholder='Address' />
                        </div>
                        <div className='flex flex-row gap-1'>
                            <label className='font-bold mr-2'>Gender</label>
                            <input type="radio" checked={gender==='male'} onChange={e=>genderchange(e.target.value)} name='gender' value="male" />
                            <label >Male</label>
                            <input type="radio" checked={gender==='female'} onChange={e=>genderchange(e.target.value)} name='gender' value="female" />
                            <label >Female</label>
                        </div>
                    </div>
                        <button type='submit' className='mt-3 reg-btn'>Register</button>
                        <button onClick={handlecheck} className='px-3 py-1 ml-2 rounded-sm border-2 border-red-600 bg-red-600 text-white hover:bg-red-700'>Back</button>
                </form>
            </div>
        </div>
    )
}

export default Register