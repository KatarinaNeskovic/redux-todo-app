// components/AddTodo.js
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../store/todoActions';
import './AddTodo.css'

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

//kaze koji property je koja akcija
const mapDispatchToProps = { sendActionTodo:addTodo }; 
/* When addTodo(text) is called, it will dispatch the action { type: ADD_TODO, payload: { text } } to the Redux store.
 mapDispatchToProps automatically binds the addTodo action creator to the dispatch function.
 */
export default connect(null, mapDispatchToProps)(AddTodo);
/* here connect is used to inject props related to the Redux store to the component.
 At the same time, the component can still accept any regular props that are passed down by its parent.
 */

/* kad se promeni stanje Redux zove AddToDo da bi se renderovala opet sa novim stanjem

AddToDo({...mapStateToProps, ...mapDispatchToProps}) 


*/