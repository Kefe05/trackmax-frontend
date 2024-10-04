import indexOne from '../assets/index-one.jpg'
import drew from '../assets/drew.jpg'
import chart from '../assets/chart.jpg'
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { MdEventNote } from "react-icons/md";
import { CiCirclePlus } from "react-icons/ci";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import './main.css'
import {Link} from 'react-router-dom'

function Index() {
  return (
     <div  id="allIndex" className='flex flex-col text-white h-screen gap-10 justify-between'>
      <nav className='bg-zinc-200/50 h-[40px] justify-between flex px-3 py-4 items-center'>
        <span className='text-white text-2xl'>Track<span className='text-red-800'>Max</span></span>
      <div className='flex justify-between w-[350px]'>
        <span>Features</span>
        <span>About</span>
        <span>More Products</span>
      </div>
      </nav>
     <div className="w-screen   m-auto  flex  gap-[35px] justify-center">
      <div className= 'h-[430px]  bg-zinc-700/50 text-slate-50 flex flex-col w-[270px]   p-5 justify-between shadow-red-500 shadow-lg rounded-xl text-[14px]'>
        <img src={indexOne} alt=""  className='w-fit block m-auto rounded-xl'/>
        {/* <span className='font-semibold'>
        Manage Your Time & Money Efficiently with TrackMax
        </span> */}
        {/* <div className='flex flex-col justify-center  text-gray-100'> */}
          <span className='w-full block bg-red-500 rounded-xl p-1 text-center'>Sign in with Email</span>
          <div className='w-full flex justify-center m-auto gap-4'>
            <span className='w-[100px] text-center border-2 border-zinc-700 p-1 rounded-md text-gray-100'>Apple ID</span>
            <span  className='w-[100px] text-center border-2 border-zinc-700 p-1 rounded-md'>Google</span>
          {/* </div> */}
        </div>
        <small className='text-zinc-200'>By contining you agree to the terms and service</small>
      </div>
      <div className= 'h-[430px] bg-zinc-700/50 text-slate-50 flex flex-col w-[270px]  p-5 justify-between shadow-red-500 shadow-lg rounded-xl  '>
       <div>
       <img src={drew} alt=""  className='w-[120px] h-[100px] block m-auto rounded-full object-cover'/>
        <span className='font-semibold text-center block m-auto'>
         John Doe
        </span>
        <span className='w-[50%] text-center p-1 block m-auto rounded-xl bg-red-500'>Edit</span>
        {/* <small className='text-center block m-auto'>johndoe@gmail.com</small> */}
       </div>
        <div className="buttons flex flex-col gap-2">
          <div className="buttons flex flex-col gap-2">
            {/* <span className='text-[14px]'> Notification</span> */}
            <div className='flex justify-between items-center bg-zinc-700 py-2 px-2 rounded-xl'>
              <span  className='text-[14px]'>Turn on Notifications</span>
              <IoIosNotificationsOutline />
            </div>
          </div >
          <div className="buttons flex flex-col gap-2">
            {/* <span  className='text-[14px]'>Invite Link</span> */}
            <div className='flex justify-between items-center bg-zinc-700  py-1 px-2 rounded-xl'>
              <span  className='text-[14px]'>Invite People</span>
              <span className='w-[80px] text-center p-1 rounded-xl bg-red-500 text-[14px]'>Invite</span>
            </div>
          </div>
        </div>
        <div className='flex justify-between'>
        <IoHomeOutline className='w-[20px]' />
        <CiCirclePlus className='w-[20px]' />
        <MdEventNote className='w-[20px]'/>
        </div>
      </div>
      <div className= 'h-[430px]  bg-zinc-700/50 text-slate-50 flex flex-col w-[270px] p-5 justify-between shadow-red-500 shadow-lg rounded-xl text-[14px] gap-3'>
        <img src={chart} alt=""  className='w-fit block m-auto rounded-xl'/>
          <span className='font-semibold'>
          Features
          </span>
          {/* <div className='flex flex-col  gap-3'> */}
            {/* <div className='p-2 bg-red-500  rounded-lg'>
              <span>Task Management</span>
            </div> */}
            <div className='p-2 bg-red-500 rounded-lg'>
              <span>Expense Tracking</span>
            </div>
            <div className='p-2 bg-red-500  rounded-lg'>
              <span>Goal Setting & Progress Tracking</span>
            </div>
          {/* </div>  */}
        <span>Register Today!</span>  
      </div>
     </div>
     <div className='flex text-white m-auto  w-[300px] text-[20px] justify-between items-center'>
      <Link to='/register' className='w-[100px] p-1 bg-red-500 text-center rounded-xl'>Register</Link>
      <Link to='/login' className='w-[100px] p-1 bg-red-500 text-center rounded-xl'>Login</Link>
     </div>
    </div>
  )
}

export default Index
