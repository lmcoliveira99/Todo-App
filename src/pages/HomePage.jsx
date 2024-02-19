import TodoList from "../components/TodoList";
import { useEffect, useState } from "react";
import data from "../data/data.json"; // Assuming you have your tasks in data/data.json

function HomePage() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Fetch tasks from data.json or your API
    // For now, let's assume tasks are stored in data.json
    setTasks(data);
  }, []);

  return (
    <section className="text-center mt-4">
      <div className="pt-16 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-800">
          Welcome To To-Do App, view your tasks.
        </h1>
      </div>
      <div className="pt-16 bg-gradient-to-b from-blue-300 to-light-blue-400 rounded-lg p-8 shadow-lg max-w-md mx-auto m-2 mt-16">
        <h2 className="text-gray-800 text-2xl mb-4 font-bold">Your Tasks</h2>
        <TodoList tasks={tasks} />
      </div>
    </section>
  );
}

export default HomePage;
