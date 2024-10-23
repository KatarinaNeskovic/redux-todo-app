import React from "react";
import { connect } from "react-redux";
import TodoItem from "../TodoItem";
import { clearAllTodos } from "../../store/actions";
import "./TodoList.css";
import { selectFilteredTodos } from "../../store/selectors";
import { TodoList } from ".";

const mapStateToProps = (state) => ({
  todos: selectFilteredTodos(state.todos, state.filter), // return value of selector function becomes todos prop for this component
});

const mapDispatchToProps = {
  clearAllTodos,
};

 export const TodoListEnhanced = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

