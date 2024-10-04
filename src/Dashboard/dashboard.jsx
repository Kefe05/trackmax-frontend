// Dashboard Component
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




function Dashboard() {
  const [showNav1, setShowNav1] = useState(false)
  const [showNav2, setShowNav2] = useState(false)
  const [showNav3, setShowNav3] = useState(false)
  const [newValue, setNewValue] = useState({ username: 'Guest' });
  const [newChart, setNewChart] = useState({
    labels: [], // Initially empty arrays
    datasets: [
      {
        label: 'Expenses Tracker $',
        data: [],
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        fill: true,
      },
    ],
  });
  

  // Update chart data on component mount
  useEffect(() => {
    setNewChart({
      labels: expense.map((data) => data.month),
      datasets: [
        {
          label: 'Expenses $',
          data: expense.map((data) => data.expense),
          backgroundColor: 'rgba(255,0,0,0.4)',
          borderColor: 'rgba(115,112,124,0.4)',
          borderWidth: 1,
          fill: true,
        },
      ],
    });
  }, []); // Empty dependency array to run only on mount

  useEffect(() => {
    fetch('http://localhost:5000/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
      },
    })
    .then(res => res.json())
    .then(data => {
      if (data.length > 0) {
        setNewValue(data[0]); // Assuming the first user is used for the dashboard
      } else {
        setNewValue({ username: 'Guest' }); // Fallback
      }
    })
    .catch(error => console.error('Error:', error));
  }, []);
  
  

  console.log(newValue)
  return (
   <div className='bg-black text-slate-400 ' >
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
    <main className='p-5 flex flex-col gap-8'>
   <div>
    <div>

    </div>
  </div>
   <div className='flex gap-6'>
    <div className='flex-1 w-[80%] bg-darkBlue p-6'><LineChart data={newChart} /></div>
    <div className='flex-1 w-[80%] bg-darkBlue p-6'><LineChart data={newChart} /></div>
   </div>
   <div></div>
   <div className='flex items-center'> 
    <div className='flex-1 flex flex-col gap-3 max-w-sm bg-darkBlue   py-8 px-4 text-[15px] h-[390px]'>
     <div className='flex justify-between'>
      <span>Messages</span>
      <span className='text-red-700'>Show All</span>
     </div>
     <div className='flex flex-col justify-between h-full'>
      <div className='flex gap-2 '>
        <CgProfile className='text-3xl' />
        <div>
          <span className='text-white font-bold'>Jhon Doe</span>
          <p>This is a short message....</p>
        </div>
        <span className='text-[12px]'>15 Minutes ago</span>
      </div>
      <div className='flex gap-2 '>
        <CgProfile className='text-3xl' />
        <div>
          <span className='text-white font-bold'>Jhon Doe</span>
          <p>This is a short message....</p>
        </div>
        <span className='text-[12px]'>15 Minutes ago</span>
      </div>
      <div className='flex gap-2 '>
        <CgProfile className='text-3xl' />
        <div>
          <span className='text-white font-bold'>Jhon Doe</span>
          <p>This is a short message....</p>
        </div>
        <span className='text-[12px]'>15 Minutes ago</span>
      </div>
      <div className='flex gap-2 '>
        <CgProfile className='text-3xl' />
        <div>
          <span className='text-white font-bold '>Jhon Doe</span>
          <p>This is a short message....</p>
        </div>
        <span className='text-[12px]'>15 Minutes ago</span>
      </div>
      <div className='flex gap-2 '>
        <CgProfile className='text-3xl' />
        <div >
          <span className='text-white font-bold '>Jhon Doe</span>
          <p>This is a short message....</p>
        </div>
        <span className='text-[12px]'>15 Minutes ago</span>
      </div>
     </div>
    </div>
   <div className="flex-1 flex items-center justify-center py-8 px-4 h-[390px]">
        <div className="max-w-sm w-full shadow-lg">
            <div className="md:p-8 p-5 bg-darkBlue  rounded-t">
                <div className="px-4 flex items-center justify-between">
                    <span   className="focus:outline-none text-white  text-base font-bold ">October 2024</span>
                    <div className="flex items-center">
                      <FaCaretLeft />
                      <FaCaretRight/>
                    </div>
                </div>
                <div className="flex items-center justify-between pt-12 overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr>
                                <th>
                                    <div className="w-full flex justify-center">
                                        <p className="text-base font-medium text-center">Mo</p>
                                    </div>
                                </th>
                                <th>
                                    <div className="w-full flex justify-center">
                                        <p className="text-base font-medium text-center">Tu</p>
                                    </div>
                                </th>
                                <th>
                                    <div className="w-full flex justify-center">
                                        <p className="text-base font-medium text-center">We</p>
                                    </div>
                                </th>
                                <th>
                                    <div className="w-full flex justify-center">
                                        <p className="text-base font-medium text-center">Th</p>
                                    </div>
                                </th>
                                <th>
                                    <div className="w-full flex justify-center">
                                        <p className="text-base font-medium text-center">Fr</p>
                                    </div>
                                </th>
                                <th>
                                    <div className="w-full flex justify-center">
                                        <p className="text-base font-medium text-center">Sa</p>
                                    </div>
                                </th>
                                <th>
                                    <div className="w-full flex justify-center">
                                        <p className="text-base font-medium text-center">Su</p>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="pt-6">
                                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center"></div>
                                </td>
                                <td className="pt-6">
                                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center"></div>
                                </td>
                                <td>
                                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center"></div>
                                </td>
                                <td className="pt-6">
                                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                        <p className="text-base  font-medium">1</p>
                                    </div>
                                </td>
                                <td className="pt-6">
                                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                        <p className="text-base  font-medium">2</p>
                                    </div>
                                </td>
                                <td className="pt-6">
                                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                        <p className="text-base ">3</p>
                                    </div>
                                </td>
                                <td className="pt-6">
                                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                        <p className="text-base ">4</p>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                        <p className="text-base  font-medium">5</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                        <p className="text-base  font-medium">6</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                        <p className="text-base  font-medium">7</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="w-full h-full">
                                        <div className="flex items-center justify-center w-full rounded-full cursor-pointer">
                                            <a  role="link" className="focus:outline-none  focus:ring-2 focus:ring-offset-2 bg-red-700  text-base w-8 h-8 flex items-center justify-center font-medium text-white rounded-full">8</a>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                        <p className="text-base  font-medium">9</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                        <p className="text-base ">10</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                        <p className="text-base ">11</p>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                        <p className="text-base  font-medium">12</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                        <p className="text-base  font-medium">13</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                        <p className="text-base  font-medium">14</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                        <p className="text-base  font-medium">15</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                        <p className="text-base  font-medium">16</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                        <p className="text-base ">17</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                        <p className="text-base ">18</p>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                        <p className="text-base  font-medium">19</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                        <p className="text-base  font-medium">20</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                        <p className="text-base  font-medium">21</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                        <p className="text-base  font-medium">22</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                        <p className="text-base  font-medium">23</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                        <p className="text-base ">24</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                        <p className="text-base ">25</p>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                        <p className="text-base  font-medium">26</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                        <p className="text-base  font-medium">27</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                        <p className="text-base  font-medium">28</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                        <p className="text-base  font-medium">29</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                        <p className="text-base  font-medium">30</p>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            
        </div>
    </div>
    <div className='flex-1 bg-darkBlue flex flex-col gap-[20px] h-[390px] py-8 px-4'>
      <div className='flex justify-between'>
        <span>Todo List</span>
        <span className='text-red-700'>Show All</span>
      </div>
      <div className='flex gap-5'>
        <input type="text" className='bg-black w-[70%] p-2 focus:outline-red-900/50 focus:outline-4 outline-none' placeholder='Enter Task Here...' />
        <button className='bg-red-700 text-white w-[20%] rounded-md px-3 py-2 text-center'>Add</button>
      </div>
      <div>
        <div className='flex justify-between items-center'>
          <div className='flex gap-2 items-center'>
          <input type="checkbox" className=' bg-black text-black'  />
          <input type="text" className='border-none bg-transparent p-2 focus:outline-red-900/50 focus:outline-4 outline-none' placeholder='Short Task goes here ...'/>
          </div>
          <FaXmark />  
        </div>
        <div className='flex justify-between items-center'>
          <div className='flex gap-2 items-center'>
          <input type="checkbox" className=' bg-black text-black'  />
          <input type="text" className='border-none bg-transparent p-2 focus:outline-red-900/50 focus:outline-4 outline-none' placeholder='Short Task goes here ...'/>
          </div>
          <FaXmark />  
        </div>
        <div className='flex justify-between items-center'>
          <div className='flex gap-2 items-center'>
          <input type="checkbox" className=' bg-black text-black'  />
          <input type="text" className='border-none bg-transparent p-2 focus:outline-red-900/50 focus:outline-4 outline-none' placeholder='Short Task goes here ...'/>
          </div>
          <FaXmark />  
        </div>
        <div className='flex justify-between items-center'>
          <div className='flex gap-2 items-center'>
          <input type="checkbox" className=' bg-black text-black'  />
          <input type="text" className='border-none bg-transparent p-2 focus:outline-red-900/50 focus:outline-4 outline-none' placeholder='Short Task goes here ...'/>
          </div>
          <FaXmark />  
        </div>
        <div className='flex justify-between items-center'>
          <div className='flex gap-2 items-center'>
          <input type="checkbox" className=' bg-black text-black'  />
          <input type="text" className='border-none bg-transparent p-2 focus:outline-red-900/50 focus:outline-4 outline-none' placeholder='Short Task goes here ...'/>
          </div>
          <FaXmark />  
        </div>
      </div>
    </div>
   </div>
    </main>
   </div>
  );
}

export default Dashboard;