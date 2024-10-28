import React from "react";
import { connect } from "react-redux";
import { clearAllTodos } from "../../ducks/actions";
import "./todo-list.css";
import { selectFilteredTodos } from "../../ducks/selectors";
import { TodoList } from "./todo-list";

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
