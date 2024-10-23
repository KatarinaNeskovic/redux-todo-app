
import React, { useState } from 'react';
import './add-todo.css'

const AddTodo = ({addTodo}) => {
  const [text, setText] = useState('');
  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== '') {
      addTodo(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-todo-form">
      <input
      className='todo-input'
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Enter a new task"
      />
      <button type="submit" className="add-todo-button">ADD</button>
    </form>
  );
};

export {AddTodo}