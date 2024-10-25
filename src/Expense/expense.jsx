import Header from "../common/header"
import { useState, useEffect } from "react";
import { expense, tasks } from '../charts/data';
import PieChart from "../charts/piechart";

function Expense() {
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

  useEffect(() => {
    setNewChart({
      labels: expense.map((data) => data.expenseType),
      datasets: [
        {
          label: 'Expenses $',
          data: expense.map((data) => data.amount),
          backgroundColor: 
          ['rgba(255, 99, 132)',   // Red
          'rgba(54, 162, 235)',   // Blue
          'rgba(255, 206, 86)',   // Yellow
          'rgba(75, 192, 192)',   // Green
          'rgba(153, 102, 255)',  // Purple
          'rgba(255, 159, 64)',    // Orange],
          'rgba(177, 149, 64)'
          ],
          borderColor: 'rgba(115,112,124,0.4)',
          borderWidth: 2,
          fill: true,
        },
      ],
    });
  }, []); // Empty
  return (
    <div className="text-slate-500 h-screen bg-black">
      <Header />
      <main className="flex">
        <div className=" flex-1 p-5">
          <div className='w-[35vw] m-auto'>
          <PieChart data={newChart}  />
          </div>
        </div>
        <div className="flex-1 p-5 flex flex-col gap-3">
          <h2 className="text-white text-3xl text-center">Expense Analysis</h2>
          <span className="text-[22px] text-slate-500">Personal Analysis</span>
        <div className="bg-darkBlue rounded-lg p-6 text-2xl">
        <span className=" text-red-700 text-center block">September</span>
          <div className="flex justify-between ">
          <div className=" p-4 flex   flex-1 ">
            <div className="flex basis-[70%]  flex-wrap justify-center gap-5 items-center text-slate-200">
            <div className="flex flex-col items-center ">
              <span className="text-[18px]">Clothing</span>
              <span >$300</span>
            </div>
            <div className="flex flex-col items-center ">
              <span className="text-[18px]" >Transport</span>
              <span>$400</span>
            </div>
            <div className="flex flex-col items-center " >
              <span className="text-[18px]">Rent</span>
              <span>$900</span>
            </div>
            <div className="flex flex-col items-center ">
              <span className="text-[18px]">Bills</span>
              <span>$600</span>
            </div>
            <div className="flex flex-col items-center ">
              <span className="text-[18px]">Fees</span>
              <span>$500</span>
            </div>
            <div className="flex flex-col items-center ">
              <span className="text-[18px]">Food</span>
              <span>$700</span>
            </div>
            </div>
          </div>
          <div className=" flex-1 flex flex-col gap-[50px]">
            <div className="flex flex-col items-center ">
              <span className="text-[18px] text-red-700"> Income</span>
              <span className="text-slate-200 font-bold" >$4000</span>
            </div>
            <div className="flex flex-col items-center ">
              <span className="text-center text-[18px] text-red-700">Total  Expense</span>
              <span className="text-slate-200 font-bold" >$3600</span>
            </div>
            <div className="flex flex-col items-center ">
              <span className="text-[18px] text-red-700">Savings</span>
              <span className="text-slate-200 font-bold">$400</span>
            </div>
          </div>
          </div>

        </div>
        </div>
      </main>
    </div>
  )
}

export default Expense
