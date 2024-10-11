// Dashboard Component
import React, { useState, useEffect } from 'react';
import LineChart from '../charts/line';
import { expense, tasks } from '../charts/data';
import { Link } from 'react-router-dom';
import { CiSettings } from 'react-icons/ci';
import { FaCaretRight } from "react-icons/fa6";
import { FaCaretLeft } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import { IoMdStats } from "react-icons/io";
import { CiCirclePlus } from "react-icons/ci";
import { CiAlarmOn } from "react-icons/ci";
import { CgProfile } from 'react-icons/cg';
import Header from '../common/header';
import Footer from '../common/Footer';




function Dashboard() {
  const [showNew, setShowNew] = useState(false)
  const [showNewProject, setShowNewProject] = useState(false)
  const [newValue, setNewValue] = useState({ username: 'Guest' });
  const [newChart, setNewChart] = useState({
    labels: [], // Initially empty arrays
    datasets: [
      {
        label: 'Expenses Tracker $',
        data: [],
        backgroundColor: 'rgba(75,192,192,0.2)', 
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 2,
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
          borderWidth: 2,
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
   <div>
    <div className='bg-black text-slate-500 relative ' >
     <Header />
    <main className='p-5 flex flex-col gap-8'>
   <div>
    <div className='flex gap-6 text-[20px] items-center'>
     <div className='flex-1 flex gap-5 items-center'> 
      <div className='flex justify-between flex-1 bg-darkBlue items-center p-6 rounded-xl' >
        < IoMdStats className='text-red-700 text-[100px]' />
        <div className='flex flex-col gap-2 '>
          <span>Projects Progress</span>
          <span className='text-[14px]  text-red-700'>60% Completed</span>
        </div>
      </div>
      <div className='flex justify-between gap-5 flex-1 bg-darkBlue items-center p-6 rounded-xl text-center'>
      < CiAlarmOn className='text-red-700 text-[100px]' />
        <div className='flex flex-col gap-2'>
          <span>Ongoing Projects</span>
          <span className='  text-red-700 '>4</span>
        </div>
      </div>
     </div>
     <div className='flex-1 flex gap-4 text-center items-center'>
      <div onClick={() => {setShowNew((prev) => !prev)
      setShowNewProject(false)
      }} className='flex-1 flex flex-col gap-3 bg-darkBlue p-4 rounded-xl'>
        <span> Create <br /> new project </span>
        <CiCirclePlus className='text-red-700 text-[40px]  text-center block m-auto ' />
      </div>
      <div className='flex-1 bg-darkBlue p-6 rounded-xl'>
       <span>Upcoming Task</span>
       <div className='text-[14px] text-red-700 flex flex-col'>
        <span>Create a website </span>
        <span>Learn React</span>
        <span>Learn more javascript</span>
       </div>
      </div>
      
     </div>
    </div>
  </div>
   <div className='flex gap-6'>
    <div className='flex-1 w-[80%] bg-darkBlue p-6'><LineChart data={newChart} /></div>
    <div className='flex-1 w-[80%] bg-darkBlue p-6'><LineChart data={newChart} /></div>
   </div>
   <div>
    <div className='bg-darkBlue p-6 flex flex-col gap-10'>
      <div className='text-[20px] flex justify-between'>
        <span className='block'>Recent Projects</span>
        <span className='text-red-700 block'>Show All</span>
      </div>
      <table className='bg-darkBlue w-full text-center border border-black'>
        <tr className='border  font-bold text-white'>
          <th className='border border-slate-700 p-3'><input type="checkbox" /></th>
          <th className='border border-slate-700  p-3'>Date Created</th>
          <th className='border border-slate-700  p-3'>Task</th>
          <th className='border border-slate-700  p-3'>Cost</th>
          <th className='border border-slate-700  p-3' >Project Name</th>
          <th className='border border-slate-700  p-3'>Due Date</th>
          <th className='border border-slate-700  p-3'>Assigned To</th>
        </tr>
        <tr>
          <td className='border border-slate-700  p-3'><input type="checkbox" /></td>
          <td className='border border-slate-700  p-3'>Jan 1st 2024</td>
          <td className='border border-slate-700  p-3'>Build a Website</td>
          <td className='border border-slate-700  p-3'>$4000</td>
          <td className='border border-slate-700  p-3'>TrackMax</td>
          <td className='border border-slate-700  p-3'>Oct 15th, 2024</td>
          <td className='border border-slate-700  p-3'>Vivanne</td>
        </tr>
        <tr>
          <td className='border border-slate-700  p-3'><input type="checkbox" /></td>
          <td className='border border-slate-700  p-3'>Jan 1st 2024</td>
          <td className='border border-slate-700  p-3'>Build a Website</td>
          <td className='border border-slate-700  p-3'>$4000</td>
          <td className='border border-slate-700  p-3'>TrackMax</td>
          <td className='border border-slate-700  p-3'>Oct 15th, 2024</td>
          <td className='border border-slate-700  p-3'>Vivanne</td>
        </tr>
        <tr>
          <td className='border border-slate-700  p-3'><input type="checkbox" /></td>
          <td className='border border-slate-700  p-3'>Jan 1st 2024</td>
          <td className='border border-slate-700  p-3'>Build a Website</td>
          <td className='border border-slate-700  p-3'>$4000</td>
          <td className='border border-slate-700  p-3'>TrackMax</td>
          <td className='border border-slate-700  p-3'>Oct 15th, 2024</td>
          <td className='border border-slate-700  p-3'>Vivanne</td>
        </tr>
        <tr>
          <td className='border border-slate-700  p-3'><input type="checkbox" /></td>
          <td className='border border-slate-700  p-3'>Jan 1st 2024</td>
          <td className='border border-slate-700  p-3'>Build a Website</td>
          <td className='border border-slate-700  p-3'>$4000</td>
          <td className='border border-slate-700  p-3'>TrackMax</td>
          <td className='border border-slate-700  p-3'>Oct 15th, 2024</td>
          <td className='border border-slate-700  p-3'>Vivanne</td>
        </tr>
        <tr>
          <td className='border border-slate-700  p-3'><input type="checkbox" /></td>
          <td className='border border-slate-700  p-3'>Jan 1st 2024</td>
          <td className='border border-slate-700  p-3'>Build a Website</td>
          <td className='border border-slate-700  p-3'>$4000</td>
          <td className='border border-slate-700  p-3'>TrackMax</td>
          <td className='border border-slate-700  p-3'>Oct 15th, 2024</td>
          <td className='border border-slate-700  p-3'>Vivanne</td>
        </tr>
      </table>
    </div>
   </div>
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
    <Footer />

    <div id="new-project" className={`h-[100vh] w-[25vw] ${showNew ? ' right-0 z-10' : 'right-[-400px]'}  bg-black top-0 fixed flex justify-center items-center transition-all duration-75 ease-in`}>
      {showNew ? <FaXmark className='absolute top-2 text-slate-200'  onClick={() => setShowNew((prev) => !prev)} /> : ''}
      <div className='text-center w-[70%] text-slate-200 flex flex-col gap-10 '>
      <h2 className='font-bold text-[20px]'>Track<span className='text-red-700'>Max</span></h2>
      <div className='flex flex-col gap-9'>
        <div className='border border-slate-200 p-3 rounded-xl hover:text-black hover:bg-slate-200 ' onClick={() => {
          setShowNewProject((prev) => !prev)}}>Create a new project</div>
        <div className='border border-slate-200 p-3 rounded-xl  hover:text-black hover:bg-slate-200'>Add a new task</div>
      </div>
      </div>

      <div id="new-project" className={`h-[100vh] w-[25vw] ${showNewProject ? ' right-0' : 'right-[-400px]'}  bg-black top-0 fixed flex justify-center items-center text-center transition-all duration-75 ease-in border-slate-200 text-slate-200`}>
         <div className='flex flex-col w-[80%] gap-[20px]'>
         <h2 className='font-bold text-[20px]'>Track<span className='text-red-700'>Max</span></h2>
         <form className='flex flex-col gap-3'>
            <div className='flex flex-col gap-2'>
              <label>Project Name</label>
              <input type="text" className='bg-black border p-[6px]' />
            </div>
            <div className='flex flex-col gap-2'>
              <label>Project Budget</label>
              <input type="text" className='bg-black border p-[6px]' />
            </div>
            <div className='flex flex-col gap-2'>
              <label>Project Start Date</label>
              <input type="text" className='bg-black border p-[6px]' />
            </div>
            <div className='flex flex-col gap-2'>
              <label>Project Completion Date</label>
              <input type="text" className='bg-black border p-[6px]' />
            </div>
          </form>
         </div>
      </div>
    </div>
   </div>
   </div>
  );
}

export default Dashboard;