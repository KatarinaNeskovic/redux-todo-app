import React from "react";
import { connect } from "react-redux";
import TodoItem from "./TodoItem";
import { clearAllTodos } from "../store/actions";
import "./TodoList.css";
import { selectFilteredTodos } from "../store/selectors";

function TodoList({ todos, clearAllTodos }) {
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


const mapStateToProps = (state) => ({
  todos: selectFilteredTodos(state.todos, state.filter),
});


const mapDispatchToProps = {
  clearAllTodos,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

/* mapStateToProps connects the Redux store to the TodoList component.
  It gets current state from the Redux store, and tells which part of that state the component will receive as props.
  The state parameter represents the current state of the Redux store (an array of todos).
  The return value { todos: ... } maps this state to the todos prop of the TodoList component.
  This means TodoList always has the most up-to-date list of todos from the Redux store, so UI and state are always in sync. */


  /* 
 REMINDER - In case i am not doing filtering, former syntax:
 
 The todos && todos.map(...) syntax is being used to ensure that todos exists
 and is defined before attempting to use the .map() function on it. 
 If todos is undefined or null, trying to call .map() on it will throw an error, causing the application to crash.
 /* If I want to remove the map&& above, I will use:
 const mapStateToProps = (state) => ({
  todos: state || [], // If state is undefined or null, use an empty array */
 