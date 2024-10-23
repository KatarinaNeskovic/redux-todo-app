import React from "react";
import { TodoList } from "./components/todo-list";
import { AddTodo }  from "./components/add-todo";
import "./App.css";
import Filter from "./components/Filter";

function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <div className="todo-container">
        <AddTodo />
        <Filter />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
