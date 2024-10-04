import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import registerImage from '../assets/registerImage.jpg'


function Register() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    username: '',
    password: ''
  });

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    console.log(values)

    axios.post('http://localhost:5000/register', values)
      .then((res) => {
        console.log(res);
        navigate('/login');
      })
      .catch((err) => console.log(err));
    

      
  }

  return (
   <div className='flex h-screen  text-zinc-200'>
    <div className='h-full grow flex-1'>
      <img src={registerImage} alt="" className='h-full w-full object-cover'/>
    </div>
    <div className="w-full h-screen flex flex-1 grow bg-slate-950">
      <form onSubmit={handleSubmit} className="self-center justify-items-center w-[60%] flex flex-col gap-3 justify-center items-center rounded-lg border-zinc-200 border-2 m-auto text-zinc-200  py-3">
        <div className="flex flex-col gap-2 w-3/4">
          <label className=" font-semibold">Name:</label>
          <input 
            type="text" 
            className="border border-zinc-200 p-1 bg-transparent focus:outline-red-500/50 focus:outline-1 outline-none rounded" 
            required 
            onChange={(e) => setValues({ ...values, name: e.target.value })}
          />
        </div>
        <div className="flex flex-col gap-2 w-3/4">
          <label className=" font-semibold">Username:</label>
          <input 
            type="text"  
            className="border border-zinc-200 p-1 bg-transparent focus:outline-red-500/50 focus:outline-1 outline-none rounded"
            required 
            onChange={(e) => setValues({ ...values, username: e.target.value })}
          />
        </div>
        <div className="flex flex-col gap-2 w-3/4">
          <label className="font-semibold">Email:</label>
          <input 
            type="email" 
            className="border border-zinc-200 p-1 bg-transparent focus:outline-red-500/50 focus:outline-1 outline-none rounded" 
            required 
            onChange={(e) => setValues({ ...values, email: e.target.value })}
          />
        </div>
        <div className="flex flex-col gap-2 w-3/4">
          <label className="font-semibold">Password:</label>
          <input 
            type="password" 
            className="border border-zinc-200 p-1 bg-transparent focus:outline-red-500/50 focus:outline-1 outline-none  rounded" 
            required 
            onChange={(e) => setValues({ ...values, password: e.target.value })}
          />
        </div>
        <button type="submit" className="bg-red-500 p-2 rounded-xl text-white w-32">Register</button>
      </form>
      {/* <p className=' pt-8'>Registered, <Link className='text-orange-300' to='/login'>Login Now</Link></p> */}
    </div>
   </div>
  );
}

export default Register;
