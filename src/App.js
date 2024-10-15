import React from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <div className='todo-container'> 
      <AddTodo />
      <TodoList />
      </div>
    </div>
  );
}

export default App;