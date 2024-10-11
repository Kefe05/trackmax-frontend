import { CgProfile } from "react-icons/cg";
function ProjectTask() {
  return (
    <div className="flex justify-between items-center bg-black p-5 rounded-xl text-[16px] font-semibold">
     < CgProfile className="text-4xl"/>
     <div>
      <span>Create a new website</span>
     </div>
     <div className="flex flex-col ">
      <span className="text-center text-red-700">Assigned to</span>
      <span className="">Moyosore Jessica</span>
     </div>
     <div className="flex flex-col ">
      <span className="text-center text-red-700">Budget</span>
      <span className="font-bold text-2xl">$3000</span>
     </div>
    </div>
  )
}

export default ProjectTask
