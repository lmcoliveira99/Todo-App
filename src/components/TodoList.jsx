import { useState } from 'react';
import AddTodos from '../components/AddTodos';
import data from '../data/data.json';

function TodoList() {
    const [todos, setTodos] = useState(data);
    const [newTask, setNewTask] = useState({ id: 0, text: '', completed: false });

    const deleteTask = (id) => {
        const newTodos = todos.filter((task) => task.id !== id);
        setTodos(newTodos);
    };

    const addTask = () => {
        setTodos([...todos, newTask]);
        setNewTask({ id: Date.now(), text: '', completed: false });
    };

    return (
        <div>
            <div>
                <input
                    type="text"
                    required
                    value={newTask.text}
                    onChange={(e) => setNewTask({ ...newTask, text: e.target.value })}
                    placeholder="Enter Task"
                />
                <button onClick={addTask}>Add your task</button>
            </div>
            {todos.map((task) => (
                <AddTodos key={task.id} task={task} deleteTask={deleteTask} />
            ))}
        </div>
    );
}

export default TodoList;
