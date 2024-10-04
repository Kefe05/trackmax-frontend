import axios from "axios";
import { CgProfile } from "react-icons/cg";
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import loginImage from '../assets/loginImage.jpg'

function Login() {
  const [values, setValues] = useState({
    username: '',
    password: '',
  })

  const navigate = useNavigate();

  function handleSubmit(e){
    e.preventDefault();

    console.log(values);
    axios.post('http://localhost:5000/login', values)
    .then((res) => {
      console.log(res);
      navigate('/dashboard');
    })
    .catch((err) => console.log(err))
  }
  return (
    <div className="flex h-screen  text-zinc-200">
      <div className='h-full grow flex-1'>
        <img src={loginImage} alt=""  className='h-full w-full object-cover'/>
      </div>
      <div className="w-full h-screen flex flex-1 grow bg-slate-950" onSubmit={handleSubmit} >
      <form   className="self-center justify-items-center w-[60%] flex flex-col gap-3 justify-center items-center rounded-lg border-zinc-200 border-2 m-auto text-zinc-200  py-3">
        <CgProfile className="text-[100px]"/>
        <div className="flex flex-col gap-2 w-3/4">
          <label  className="font-semibold" >Username:</label>
          <input type="text" className="border border-zinc-200 p-1 bg-transparent focus:outline-red-500/50 focus:outline-1 outline-none  rounded"
           onChange={(e) => setValues({ ...values, username: e.target.value })}
          required/>
        </div>
        <div className="flex flex-col gap-2 w-3/4">
        <label  className="font-semibold" >Password:</label>
        <input type="password" className="border border-zinc-200 p-1 bg-transparent rounded focus:outline-red-500/50 focus:outline-1 outline-none"  onChange={(e) => setValues({ ...values, password: e.target.value })}
        required/>
        </div>
        <button type="submit" className="bg-red-500 p-2  rounded-xl text-white w-32 hover:scale-110 "> Login</button>
      </form>
      {/* <p className="pt-8">Not registered, <Link to='/register' className='text-orange-300'>Register Now</Link></p> */}
    </div>
    </div>
  )
}

export default Login
