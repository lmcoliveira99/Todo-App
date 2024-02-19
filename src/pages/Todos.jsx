import { useState } from "react";
import TodoList from "../components/TodoList";
import Create from "../components/Create";

function Todos() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  return (
    <div className="max-w-md mx-auto mt-16 bg-gradient-to-b from-light-blue-300 to-light-blue-400 p-8 rounded-lg shadow-lg">
      <TodoList tasks={tasks} />
      <Create onTaskAdd={addTask} />
    </div>
  );
}

export default Todos;
