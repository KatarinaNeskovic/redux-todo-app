import React, { useState } from "react";
import { connect } from "react-redux";
import { toggleTodo, editTodo, deleteTodo } from "../store/actions";

const TodoItem = ({ todo, toggleTodo, editTodo, deleteTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleToggle = () => {
    toggleTodo(todo.id);
  };

  const handleEditChange = (e) => {
    setEditText(e.target.value);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (editText.trim() !== "") {
      editTodo(todo.id, editText);
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditText(todo.text);
  };

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  return (
    <li>
      <input type="checkbox" checked={todo.completed} onChange={handleToggle} />
      {!isEditing && (
        <>
          <span
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.text}
          </span>

          <button onClick={handleEdit}>Edit</button>
        </>
      )}

      {isEditing && (
        <>
          <input type="text" value={editText} onChange={handleEditChange} />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </>
      )}
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

const mapDispatchToProps = {
  toggleTodo,
  editTodo,
  deleteTodo,
};

export default connect(null, mapDispatchToProps)(TodoItem);
