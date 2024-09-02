import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"


const Login = () => {
    const [username, usernameUpdate] = useState('');
    const [password, passwordUpdate] = useState('');

    const navigate = useNavigate()



    
    const proceedLogin = (e) => {
        e.preventDefault();
        if (validate()) {
            

            fetch("http://localhost:8000/user/"+username).then((res)=>{
                return res.json();
            }).then((resp)=>{
                if(Object.keys(resp).length===0){
                    console.log('Please Enter valid username');
                }
                else{
                    if(resp.password===password){
                        navigate('/home')
                    }
                    else{
                        alert("Enter the correct password");
                    }
                }
            }).catch((err)=>{
                console.log(err.message)
            })

        }
    }


    const validate = () => {
        let result = true;
        if (username === '' || username === null) {
            result = false;
            alert("Enter Your Username")
        }
        if (password === '' || password === null) {
            result = false;
            alert('Please Enter Password')
        }
        return result

    }

    return (

        <div class="h-screen w-screen flex justify-center items-center bg-slate-100">
            <div className='w-full  p-10 rounded-lg max-w-3xl mx-2 dark:bg-gray-500 '>

                <form onSubmit={proceedLogin}>
                    <h1 className='text-2xl text-white'>User Login</h1>
                    <div className="log-bar">
                        <div >
                            <input type="text" value={username} onChange={e => usernameUpdate(e.target.value)}  placeholder="Username"/>
                        </div>
                        <div >
                            <input type="password" value={password} onChange={e => passwordUpdate(e.target.value)} placeholder="password"/>
                        </div>
                    </div>
                    <div className="mt-3">
                        <button type="submit" className='px-3 mr-3 py-1 rounded-md border-2 border-violet-700 bg-violet-600 text-white hover:bg-violet-700'>Login</button>
                        <Link to={'/register'} className="px-3 mr-3 py-1 rounded-md border-2 border-green-600 bg-emerald-500 text-white hover:bg-green-700">New User</Link>
                    </div>
                </form>

            </div>
        </div>
    )
}


export default Login;