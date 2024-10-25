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
import organised from '../assets/organised.jpg'

function Index() {
  return (
     <div className=' bg-darkBlue text-slate-200 '>
      <header className='flex p-6 justify-between items-center bg-darkBlue text-[20px]'>
        <div className='text-white text-3xl'>Track<span className='text-red-700'>Max</span></div>
        <div className='flex gap-7'>
          <span className='hover:text-red-700'>Home</span>
          <span className='hover:text-red-700' >Services</span>
          <span className='hover:text-red-700'>Features</span>
          <span className='hover:text-red-700'>About Us</span>
        </div>
        <div className='flex gap-7'>
          <Link to='/login' className='p-3 w-[100px] text-center border border-slate-200 rounded-xl'>Login</Link>
          <Link to='/register' className='p-3 w-[100px] text-center border border-white rounded-xl'>Sign Up</Link>
          </div>
      </header>
      <hr className='text-slate-500'/>
      <main className='flex flex-col gap-6' >
        <div className="hero flex justify-between items-center p-6">
          <div className="hero-ctn flex-1 flex flex-col gap-5">
            <h2 className='text-4xl font-bold text-white'>All The Productivity 
              <br />needed are available on <br />
              Track<span className='text-red-700'>Max</span></h2>
            <p>Get all the convience you need to get your <br /> day started with TrackMax</p>
              <div className='flex'>
                <div className='flex flex-col border-right border-slate-200 pr-5' >
                  <span className=' text-3xl '>30k+</span>
                  <span >Active Users</span>
                </div>
                <div className='flex flex-col'>
                  <span className='text-center text-3xl'>400k+</span>
                  <span>Downloaded</span>
                </div>
              </div>
              <div className='flex  gap-10'>
                <span className='p-3 text-2xl border-white border rounded-lg'>Get Started</span>
                <span className='p-3 text-2xl border-white border rounded-lg'>How it work</span>
              </div>
          </div>
          <div className="flex-1 h-[80vh] self-center">
            <img src={organised} className='h-full block m-auto w-full object-cover' alt="" />
          </div>
        </div>
        <div className="about-us h-screen ">
          <div className='h-full w-full bg-darkBlue/70'>
          <div className='text-[20px] w-[70%] h-full m-auto flex flex-col justify-center gap-10'>
            <div className='flex flex-col gap-3'>
            <h2 className='text-3xl font-bold text-center text-red-700'>How It Works</h2>
            <hr />
            </div>
            <p className=' text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, distinctio veniam illo quas provident ipsam recusandae velit quos fugiat quod quam repellat consectetur reiciendis culpa similique aspernatur error. Commodi, earum. Beatae sapiente nesciunt doloribus blanditiis laboriosam veniam unde nam incidunt modi. Voluptatibus provident facilis eius labore accusamus. Molestiae nam aperiam consequuntur nihil maxime ducimus perspiciatis deserunt fugiat aliquid? Praesentium blanditiis quod culpa excepturi! Provident itaque molestiae est accusamus dignissimos voluptatem.</p>
          </div>
          
          </div>
        </div>
        <div className="features p-6">
          <div className="w-[70%] text-[20px] flex flex-col gap-5 m-auto">
          <div className='flex flex-col gap-4'>
          <h2 className='text-center text-3xl '>Our Features</h2>
          <hr />
          </div>
          <div className=' flex flex-col gap-2'>
            <h3 className='font-bold text-red-500'>Progress Tracking</h3>
            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque qui veritatis, vero quo in nesciunt voluptatibus asperiores distinctio dicta aliquid maiores inventore neque odio possimus totam facere. Quasi, alias voluptates.</p>
          </div>
          <div className=' flex flex-col gap-2'>
            <h3 className='font-bold text-red-500'>Time Management</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque qui veritatis, vero quo in nesciunt voluptatibus asperiores distinctio dicta aliquid maiores inventore neque odio possimus totam facere. Quasi, alias voluptates.</p>
          </div>
          <div className=' flex flex-col gap-2'>
            <h3 className='font-bold text-red-500'>Collaboration</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque qui veritatis, vero quo in nesciunt voluptatibus asperiores distinctio dicta aliquid maiores inventore neque odio possimus totam facere. Quasi, alias voluptates.</p>
          </div>
          </div>
        </div>
      </main>
      <footer className='p-5 flex justify-between'>
      <div className='flex gap-3'>
        &copy;
        <div><span className='text-red-700'>Kingswrld,</span> All rights reserved</div>
      </div>
      <div className='flex flex-col '>
        <span>Template By <span className='text-red-700'> HTML Codex</span></span>
        <span>Copied from <span className='text-red-700'> ThemeWagon </span> </span>
      </div>
    </footer>
     </div>
  )
}

export default Index
