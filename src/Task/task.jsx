import { FaRegTrashCan } from "react-icons/fa6";
import { CiEdit } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";


function Task() {
  return (
    <div className="flex text-center items-center p-3 gap-4 rounded-lg bg-black text-slate-200">
      <CgProfile className="text-5xl"/>
      <div  className="flex flex-col">
        <input className="taskName bg-transparent text-[20px] text-center font-bold" value='Build a website'   />
        <input className="description bg-transparent text-center " value='Buy the domain' />
      </div>
      <div className="flex flex-col">
        <span className="text-red-700">Due Date</span>
        <span className="text-[17px] font-semibold">Wednesday Oct 15, 2024</span>
      </div>
      <div className="flex gap-3">
        <FaRegTrashCan className="text-2xl text-red-700"/>
        <CiEdit className="text-2xl" />
      </div>
    </div>
  );
}

export default Task;
