import React from "react";
import { TodoItem } from "../todo-item";
import "./todo-list.css"

const TodoList=({ todos, clearAllTodos }) => {
  return (
    <div className="todo-list-container">
      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} /> // react always needs a unique key when rendering lists!
        ))}{" "}
      </ul>
      <button onClick={clearAllTodos} className="clear-todo-button">
        {" "}
        Clear All{" "}
      </button>
    </div>
  );
}


export {TodoList}

