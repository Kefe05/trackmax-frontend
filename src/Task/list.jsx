import Task4list from "./task4list"

function List() {
  return (
    <div>
      <div className="header flex justify-between p-3 items-center text-center">
        <span className="font-bold text-[20px] text-slate-200">Grocery</span>
        <div className="flex flex-col">
          <span className="text-red-700">Budget</span>
          <span className="text-2xl text-white font-bold">$4000</span>
        </div>
      </div>
      <div className="flex flex-col gap-2">
          <Task4list/>
          <Task4list/>
          <Task4list/>
          <Task4list/>
        </div>
    </div>
  )
}

export default List
