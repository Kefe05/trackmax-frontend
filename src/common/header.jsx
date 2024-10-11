import { useState } from "react";
import { FaCaretUp } from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { IoIosNotifications } from "react-icons/io";
import { FaCaretDown } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";


function Header() {
  const [showNav1, setShowNav1] = useState(false)
  const [showNav2, setShowNav2] = useState(false)
  const [showNav3, setShowNav3] = useState(false)

  return (
    <div>
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
    </div>
  )
}

export default Header
