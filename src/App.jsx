import { useState, useEffect } from "react";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import {
  fetchTasks,
  addTask as apiAddTask,
  updateTask,
  deleteTask as apiDeleteTask,
} from "./api/tasksApi";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");

  // Load tasks from API or LocalStorage
  useEffect(() => {
    const getTasks = async () => {
      try {
        const data = await fetchTasks();
        setTasks(data);
        localStorage.setItem("tasks", JSON.stringify(data));
      } catch (err) {
        const localData = localStorage.getItem("tasks");
        if (localData) setTasks(JSON.parse(localData));
      }
    };
    getTasks();
  }, []);

  // Sync tasks to LocalStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Add a new task
  const addTask = async (text) => {
    const newTask = { text, completed: false };
    const savedTask = await apiAddTask(newTask);
    setTasks([...tasks, savedTask]);
  };

  // Toggle completed
  const toggleTask = async (id) => {
    const task = tasks.find((t) => t.id === id);
    const updated = await updateTask(id, { ...task, completed: !task.completed });
    setTasks(tasks.map((t) => (t.id === id ? updated : t)));
  };

  // Delete a task
  const deleteTask = async (id) => {
    await apiDeleteTask(id);
    setTasks(tasks.filter((t) => t.id !== id));
  };

  // Update task text (Double click to edit)
  const updateTaskText = async (id, text) => {
    const task = tasks.find((t) => t.id === id);
    const updated = await updateTask(id, { ...task, text });
    setTasks(tasks.map((t) => (t.id === id ? updated : t)));
  };

  // Filter tasks
  const filteredTasks = tasks.filter((task) => {
    if (filter === "All") return true;
    if (filter === "Active") return !task.completed;
    if (filter === "Completed") return task.completed;
    return true;
  });

  return (
    <div className="container mx-auto p-4 max-w-md">
      <Header />
      <AddTask addTask={addTask} />

      {/* Filter Buttons */}
      <div className="mb-4 flex gap-2">
        <button
          onClick={() => setFilter("All")}
          className={`px-3 py-1 rounded ${filter === "All" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          All
        </button>
        <button
          onClick={() => setFilter("Active")}
          className={`px-3 py-1 rounded ${filter === "Active" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          Active
        </button>
        <button
          onClick={() => setFilter("Completed")}
          className={`px-3 py-1 rounded ${filter === "Completed" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          Completed
        </button>
      </div>

      <TaskList tasks={filteredTasks} toggleTask={toggleTask} deleteTask={deleteTask} updateTaskText={updateTaskText} />
    </div>
  );
}

export default App;
