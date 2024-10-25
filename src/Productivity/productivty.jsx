import Header from "../common/header"
import Footer from '../common/footer'
import Task from "../Task/task"
import List from "../Task/list"

function Productivity() {
  return (
    <div className="bg-black  text-slate-500 flex flex-col gap-3">
      <Header/>
      <main>
        <div className="flex p-6 gap-3">
         <div className="flex flex-col gap-5">
         <div className="flex-1 flex flex-col gap-3 p-6 bg-darkBlue rounded-xl" >
          <h2 className="text-2xl font-bold text-slate-200">All Tasks</h2>
          <div className="flex flex-col gap-3 ">
           <Task />
           <Task />
           <Task />
           <Task />
          </div>
         </div>
         <div className="flex-1 flex flex-col gap-3 p-6 bg-darkBlue rounded-xl" >
          <h2 className="text-2xl font-bold text-slate-200">List</h2>
          <div className="flex flex-col gap-3 ">
           <List />
          </div>
         </div>
         </div>
        <div className="flex-1 text-center gap-3 flex flex-col self-start">
        <div className="flex  text-[20px] w-[70%] m-auto bg-darkBlue p-7 ">
          <div className="flex flex-col gap-4 m-auto">
          <div className="flex flex-col">
            <span className="text-red-700">Completed Task</span>
            <span className="text-3xl font-bold text-slate-200">5</span>
          </div>
          <div className="flex flex-col">
            <span className="text-red-700 ">Ongoing Task</span>
            <span className="text-3xl font-bold text-slate-200 ">8</span>
          </div>
          </div>
          <div className="flex flex-col gap-4 m-auto">
          <div className="flex flex-col">
            <span className="text-red-700 ">Completed List</span>
            <span className="text-3xl font-bold text-slate-200">0</span>
          </div>
          <div className="flex flex-col">
            <span className="text-red-700 ">Ongoing List</span>
            <span className="text-3xl font-bold text-slate-200">1</span>
          </div>
          </div>
        </div>
         <div className="flex gap-2 w-fit m-auto ">
         <button className='bg-red-700 w-[100px] p-4 text-slate-200 text-[16px] rounded-xl font-semibold'>Add Task</button>
         <button className='bg-red-700 w-[100px] p-4 text-slate-200 text-[16px] rounded-xl font-semibold'>Add List</button>
         </div>
         </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Productivity
