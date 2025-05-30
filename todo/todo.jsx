import React, { useState } from 'react';
import './todo.css';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;

    setTodos([...todos, { text: input, completed: false }]);
    setInput('');
  };

  const toggleTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-container">
      <div className="todo-box">
        <h2>Things to do!</h2>
        <form onSubmit={handleAddTodo} className="todo-form">
          <input
            type="text"
            placeholder="Input a task"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit">+</button>
        </form>

        <ul className="todo-list">
          {todos.map((todo, index) => (
            <li key={index} className="todo-item">
              <label>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(index)}
                />
                <span className={todo.completed ? 'completed' : ''}>{todo.text}</span>
              </label>
              <button onClick={() => deleteTodo(index)}>🗑</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
