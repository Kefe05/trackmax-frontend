import { useState, useEffect } from "react";
import Task from "../Task/task";
import BarChart from "../charts/bar";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import dayjs from 'dayjs';

function Productivity() {
  const navigate = useNavigate();

  const [task, setTask] = useState([]);
  const [tasksCompleted, setTasksCompleted] = useState([]); // Ensure it's initialized as an empty array

  const [newChart, setNewChart] = useState({
    labels: [],
    datasets: [
      {
        label: "Completed Task per day",
        data: [],
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
        fill: true,
      },
    ],
  });

  // Fetch tasks and completed tasks on component mount
  useEffect(() => {
    axios.get("http://localhost:5000/productivity-tracker")
      .then((res) => {
        if (res.data.length > 0) {
          setTask(res.data);
        }
      })
      .catch((error) => console.error("Error fetching tasks:", error));

    // Fetch completed tasks
    axios.get("http://localhost:5000/completed-task")
      .then((res) => {
        // Ensure the fetched data is an array
        if (Array.isArray(res.data)) {
          setTasksCompleted(res.data);
        } else {
          setTasksCompleted([]); // In case the response is not an array
        }
      })
      .catch((error) => console.error("Error fetching completed tasks:", error));
  }, []);

  // Update chart based on completed tasks
  useEffect(() => {
    // Safeguard in case tasksCompleted is not an array
    if (Array.isArray(tasksCompleted)) {
      setNewChart({
        labels: tasksCompleted.map(task => task.date), // Dates for the x-axis
        datasets: [
          {
            label: "Completed Task per day",
            data: tasksCompleted.map(task => task.taskCompleted), // Number of tasks completed
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "rgba(75,192,192,1)",
            borderWidth: 1,
            fill: true,
          },
        ],
      });
    }
  }, [tasksCompleted]);

  // Handle task completion
  const handleCompleteTask = async (id) => {
    const today = dayjs().format('YYYY-MM-DD');

    try {
      // Check for existing entry for today's date
      const existingEntry = tasksCompleted.find(entry => entry.date === today);

      if (existingEntry) {
        // Increment the task count for today
        setTasksCompleted(prev =>
          prev.map(entry =>
            entry.date === today
              ? { ...entry, taskCompleted: entry.taskCompleted + 1 }
              : entry
          )
        );

        // Update the count in the backend
        await axios.post("http://localhost:5000/completed-task", {
          date: today,
          taskName: existingEntry.taskName, // Include taskName if needed
          taskCompleted: 1
        });
      } else {
        // Create a new entry for today
        setTasksCompleted(prev => [...prev, { date: today, taskCompleted: 1, taskName: "New Task" }]); // Add taskName

        // Add the count to the backend
        await axios.post("http://localhost:5000/completed-task", {
          date: today,
          taskName: "New Task", // Include taskName if needed
          taskCompleted: 1
        });
      }

      // Call the existing delete function to handle deletion
      handleDelete(id);
    } catch (error) {
      console.error("Error completing task:", error);
    }
  };

  // Handle task deletion
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/deleteTask/${id}`);
      setTask(prevTasks => prevTasks.filter(task => task.id !== id));
    } catch (err) {
      console.error("Error deleting task:", err);
    }
  };

  return (
    <div className="p-5 w-[60%] m-auto">
      <h2 className="font-bold text-3xl p-2 rounded">Your Daily Task</h2>
      <div className="w-full p-6 border-2 mb-2">
        <BarChart data={newChart} />
      </div>
      <div className="flex flex-col gap-5">
        {task.map(({ id, name, details }) => (
          <Task
            key={id}
            name={name}
            detail={details}
            id={id}
            handleDelete={handleDelete}
            handleCompleted={handleCompleteTask} // Pass the handleCompleteTask function
          />
        ))}
      </div>
      <div className="flex justify-end p-11 gap-3">
        <Link to="/add-new-task" className="bg-orange-400 p-4 rounded-xl text-white">
          Add Task
        </Link>
        <button className="bg-orange-400 p-4 rounded-xl text-white">Shuffle</button>
      </div>
    </div>
  );
}

export default Productivity;
