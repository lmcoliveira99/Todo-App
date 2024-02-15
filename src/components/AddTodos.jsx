import React from 'react';
import { Link } from 'react-router-dom';

function AddTodos({ task, deleteTask }) {
    if (!task) {
        return null; // or handle the case when task is missing
    }

    return (
        <div>
            <Link to={`/doit/${task.id}`}>
                <p>{task.text}</p>
            </Link>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
    );
}

export default AddTodos;