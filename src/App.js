import React from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList'
import './App.css';
import Filter from './components/Filter';

function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <div className='todo-container'> 
      <AddTodo />
      <Filter />
      <TodoList />


      </div>
    </div>
  );
}

export default App;