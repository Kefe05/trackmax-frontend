import { CiEdit } from "react-icons/ci"
import { FaRegTrashCan } from "react-icons/fa6"

function Task4list() {
  return (
    <div className="flex text-[20px] bg-black p-3 text-center text-slate-200 items-center justify-around rounded-lg">
      <span>Buy Onions</span>
      <div className="flex flex-col">
        <span className="text-[14px] text-red-700">Budget</span>
        <span>$30</span>
      </div>
      <div className="flex gap-4">
        <FaRegTrashCan className="text-2xl text-red-700"/>
        <CiEdit className="text-2xl" />
      </div>
    </div>
  )
}

export default Task4list
