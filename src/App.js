import React from "react";
import AddTodo from "./components/add-todo/add-todo";
import { TodoList } from "./components/todo-list";
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
