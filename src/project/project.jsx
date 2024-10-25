import React, { useState, useEffect } from 'react';
import LineChart from '../charts/line';
import { expense, tasks } from '../charts/data';
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { CiSettings } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";
import { FaCaretDown } from "react-icons/fa6";
import { FaCaretRight } from "react-icons/fa6";
import { FaCaretLeft } from "react-icons/fa6";
import { FaCaretUp } from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import { FaXmark } from "react-icons/fa6";
import { IoMdStats } from "react-icons/io";
import { CiCirclePlus } from "react-icons/ci";
import { CiAlarmOn } from "react-icons/ci";
import ProjectTask from './Eproject';
import AllProject from './allProject';

function Project() {
  const [showNav1, setShowNav1] = useState(false)
  const [showNav2, setShowNav2] = useState(false)
  const [showNav3, setShowNav3] = useState(false)
  return (
    <div className=" bg-black flex flex-col gap-[5px] text-slate-200">
      <nav className='bg-darkBlue flex justify-between p-5'>
        <div className='flex  gap-2 items-center'>
          <span className='p-3 rounded-full bg-black hover:text-red-700'><GiHamburgerMenu /></span>  
          <input type="text" className='bg-black py-2 px-4 rounded-md text-[16px] focus:outline-red-900/50 focus:outline-4 outline-none' placeholder='Search'/>
        </div>
        <div className='flex gap-6 items-center text-[17px]'>
          <div className='relative'>
            <div className='hover:text-red-700 flex gap-2 items-center 'onClick={() => setShowNav1((prev) => !prev)}>
              <span className='p-3 rounded-full text-xl bg-black'><LuMail /></span>
              <span>Message</span>
            {showNav1? <FaCaretUp /> : <FaCaretDown/> }
            </div>
            <div className={`absolute right-0 w-[240px] bg-darkBlue p-4 ${showNav1? '' : 'hidden'}` }>
              <div className='flex items-start gap-2 border-b border-slate-400 p-3'>
                <CgProfile className='text-4xl'/>
                <div className='flex flex-col gap-1 '>
                  <span className='text-white text-[16px]'>Kefe sent you a Message</span>
                  <span className='text-[14px]'>15 minutes ago</span>
                </div>
                <hr />
              </div>
              <div className='flex items-start gap-2 border-b border-slate-400 p-3'>
                <CgProfile className='text-4xl'/>
                <div className='flex flex-col gap-1 '>
                  <span className='text-white text-[16px]'>Kefe sent you a Message</span>
                  <span className='text-[14px]'>15 minutes ago</span>
                </div>
              </div>
              <div className='flex items-start gap-2 border-b border-slate-400 p-3'>
                <CgProfile className='text-4xl'/>
                <div className='flex flex-col gap-1 '>
                  <span className='text-white text-[16px]'>Kefe sent you a Message</span>
                  <span className='text-[14px]'>15 minutes ago</span>
                </div>
              </div>
            </div>
          </div>
          <div className='relative'>
            <div className='hover:text-red-700  flex  gap-2 items-center ' onClick={() => setShowNav2((prev) => !prev)}>
              <span className='p-3 rounded-full bg-black text-xl'><IoIosNotifications /></span>
              <span>Notification</span>
              {showNav2? <FaCaretUp /> : <FaCaretDown/> }
            </div>
            <div className={`absolute right-0 w-[240px] bg-darkBlue p-4 ${showNav2? '' : 'hidden'} gap-2` }>           
                <div className='flex flex-col border-b border-slate-400 p-3'>
                  <span className='text-white text-[16px]'>Kefe sent you a Message</span>
                  <span className='text-[14px]'>15 minutes ago</span>
                </div>
                <div className='flex flex-col border-b border-slate-400 p-3 '>
                  <span className='text-white text-[16px]'>Kefe sent you a Message</span>
                  <span className='text-[14px]'>15 minutes ago</span>
                </div>
                <div className='flex flex-col border-b border-slate-400 p-3'>
                  <span className='text-white text-[16px]'>Kefe sent you a Message</span>
                  <span className='text-[14px]'>15 minutes ago</span>
                </div>
            </div>  
        </div>
          <div className='relative'>
            <div className='hover:text-red-700 flex gap-2 items-center ' onClick={() => setShowNav3((prev) => !prev)}>
              <span className='w-[30px] h-[30px] rounded-full bg-black text-xl'><CgProfile className='w-full h-full'/></span>
              <span>Your Profile</span>
              {showNav3? <FaCaretUp /> : <FaCaretDown/> }
            </div>
            <div className={`absolute right-0 w-[240px] bg-darkBlue p-4 ${showNav3? '' : 'hidden'} p-2` }>
              <div className='flex items-start gap-2 p-2 hover:bg-black'>
              Profile
              </div>
              <div className='flex items-start gap-2 p-2 border-b-slate-500 hover:bg-black'>
              Settings
              </div>
              <div className='flex items-start gap-2 p-2 hover:bg-black '>
                Logout
              </div>
            </div>
          </div>
          </div>
    
      </nav>
      <main  className='flex gap-10 p-6'>
        <div className='flex-1 flex flex-col gap-4'>
          <h2  className='text-red-700 text-2xl text-start font-bold '>Projects</h2>
          <div className='bg-darkBlue flex flex-col p-6'>
           <AllProject></AllProject>
           <button className='bg-red-700 w-[100px] p-4 m-auto text-[16px] rounded-xl font-semibold'>Add Task</button>
          </div>
        </div>
        <div className='flex-1 flex flex-col gap-4'>
          <h2 className='text-red-700 text-2xl  font-bold text-start'>Project Details</h2>
          <div className='bg-darkBlue  flex items-center flex-wrap p-5'>
            <div className='flex flex-col gap-10 flex-1'>
              <div className='flex flex-col text-center'>
                <span className='text-[18px] text-red-700 font-bold'>Project Progress</span>
                <span className='text-4xl'>70%</span>
              </div>
              <div  className='flex flex-col gap-3 justify-center items-center text-center'>
                 <span className='text-[18px] text-red-700 font-bold' >Project Manger</span>
                 <CgProfile className='text-[50px]' />
                 <span  className='text-2xl font-bold'>Eniola Awodire</span>
              </div>
              <div className='flex flex-col text-center'>
                <span className='text-red-700 text-[18px] font-bold'>Due Date</span>
                <span  className='text-2xl font-bold'>15th October, 2024</span>
              </div>
            </div>
            <div className='flex flex-col flex-wrap gap-10   flex-1'>
              <div className='flex flex-col text-center'>
                <span className='text-red-700 text-[18px] font-bold'>Project Budget</span>
                <span className='text-2xl font-bold'>$40,000</span>
              </div>
              <div className='flex flex-col text-center'>
                <span className='text-red-700 text-[18px] font-bold'>Project Current 
                  <br />Expenditure</span>
                <span className='text-2xl font-bold'>$12,000</span>
              </div>
              <div className='flex flex-col text-center'>
                <span className='text-red-700 text-[18px] font-bold'>Project <br /> Net Income</span>
                <span className='text-2xl font-bold'>$28,000</span>
              </div>

            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Project
