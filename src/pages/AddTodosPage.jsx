import React, { useState } from "react";
import data from "../data/data.json";
import AddTodos from "../components/AddTodos";

function AddTodosPage() {
    const [todos, setTodos] = useState(data);
    const [newTask, setNewTask] = useState({ id: 0, text: "", completed: false });

    const deleteTask = (id) => {
        // Add logic to delete task with the given id
    };

    return (
        <div>
            {todos.map((task) => (
                <div key={task.id}>
                    <AddTodos task={task} deleteTask={deleteTask} />
                    <button onClick={() => deleteTask(task.id)}>Delete</button>
                </div>
            ))}
            <div>
                <input
                    type="text"
                    value={newTask.text}
                    onChange={(e) => setNewTask({ ...newTask, text: e.target.value })}
                    placeholder="Enter Task"
                />
            </div>
        </div>
    );
}

export default AddTodosPage;
