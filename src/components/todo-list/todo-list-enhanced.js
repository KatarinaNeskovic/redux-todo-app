import React from "react";
import { connect } from "react-redux";
import { clearAllTodos } from "../../ducks/todo-duck";
import "./todo-list.css";
import { filteredTodosSelector } from "../../ducks/selectors";
import { TodoList } from "./todo-list";

const mapStateToProps = (state) => ({
  todos: filteredTodosSelector(state), // return value of selector function becomes todos prop for this component
});

const mapDispatchToProps = {
  clearAllTodos,
};

export const TodoListEnhanced = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
