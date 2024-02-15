import { useParams } from "react-router-dom";
import data from "../data/data.json";
import { useState } from "react";

function Todos() {
  const { id } = useParams(); // Get the id from the route parameters
  const [doTask, setTask] = useState(data.find(task => task.id === parseInt(id))); // Use the id to find the corresponding task

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  return (
    <div className="App text-center">
      <form className="App text-center"> 
        <input
          type="text"
          required
          value={doTask.text}
          onChange={handleInputChange}
          placeholder="Enter Task"
        />
      </form>
      <div className="App text-center">
        <h1>{doTask.text}</h1>
      </div>
    </div>
  );
}
export default Todos;