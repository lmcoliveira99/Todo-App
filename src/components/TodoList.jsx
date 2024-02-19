import { useState, useEffect } from 'react';




function TodoList() {
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem('todos');
    const data = [{ id: 1, task: 'Example Task' }]; // Add default todo if no stored todos
    return storedTodos ? JSON.parse(storedTodos) : data;
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const deleteTodo = (todoId) => {
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(updatedTodos); // Update the state with the filtered todos
  };

  return (
    <div className="TodoPage bg-gradient-to-b from-light-blue-300 to-light-blue-400">
      <div className="TodoList flex flex-col text-center">
        {todos.map((todo) => (
          <div key={todo.id} className="Todo-card bg-white rounded-lg p-4 shadow-lg mt-4">
            <h3 className="text-sm font-semibold mb-2">{todo.task}</h3>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300 ml-62"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoList;
