import React from "react";
import { connect } from "react-redux";
import TodoItem from "../TodoItem";
import "./TodoList.css";

const TodoList=({ todos, clearAllTodos }) => {
  console.log(todos);
  return (
    <div className="todo-list-container">
      <ul className="todo-list">
        {todos && todos.map((todo) => (
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

