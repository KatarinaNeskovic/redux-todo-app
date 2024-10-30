import { connect } from "react-redux";
import { toggleTodo, editTodo, deleteTodo } from "../../ducks/todo-duck";
import TodoItem from "./todo-item";
import "./todo-item.css";

const mapDispatchToProps = {
  toggleTodo,
  editTodo,
  deleteTodo,
};

export const TodoItemEnhanced = connect(null, mapDispatchToProps)(TodoItem);
