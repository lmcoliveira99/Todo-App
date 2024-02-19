/* eslint-disable react/prop-types */
import { useState } from "react";


function Create({ onTaskAdd }) {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === "") {
      return; // Do not add empty task
    }
    const newTask = {
      text: task,
      completed: false,
    };

    onTaskAdd(newTask);
    setTask("");
  };

  return (
    <section className="bg-gradient-to-b from-blue-300 to-light-blue-400 rounded-lg p-8 shadow-lg max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <label className="text-white text-2xl mb-4 font-bold">
          Create Your Task:
        </label>
        <input
          className="border-2 rounded-md border-white mb-4 p-3 outline-none focus:border-blue-500 text-black"
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter Task"
        />

        <button
          type="submit"
          className="bg-white hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded transition duration-300"
        >
          Add Task
        </button>
      </form>
    </section>
  );
}


export default Create;
