import { connect } from "react-redux";
import { toggleTodo,editTodo,deleteTodo } from "../../store/actions";
import {TodoItem} from './todo-item'
import "./todo-item.css";

const mapDispatchToProps = {
    toggleTodo,
    editTodo,
    deleteTodo,
  };
  
  export const TodoItemEnhanced = connect(null, mapDispatchToProps)(TodoItem);
  