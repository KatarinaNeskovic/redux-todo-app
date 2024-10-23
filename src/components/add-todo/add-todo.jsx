
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../store/actions';
import './add-todo.css'

//neki props su delovi stanja Redux store-a a neki su akcije kojima se menja to stanje
const AddTodo = (props) => {
  const [text, setText] = useState('');
const sendActionTodo = props.sendActionTodo  
  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== '') {
      sendActionTodo(text);
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
