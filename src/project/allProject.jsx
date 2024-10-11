import ProjectTask from "./Eproject"

function AllProject() {
  return (
    <div >
      <div className="header flex bg-slate-800 justify-between items-center text-center p-4">
        <span className="text-3xl font-bold">Tzeti</span>
        <div className="flex flex-col ">
          <span className="text-red-700">Budget</span>
          <span className="text-[20px]">$40,000</span>
        </div>
      </div>
      <div className=" flex flex-col gap-4 py-4">
      <ProjectTask></ProjectTask>
      <ProjectTask></ProjectTask>
      <ProjectTask></ProjectTask>
      <ProjectTask></ProjectTask>
      </div>
    </div>
  )
}

export default AllProject
