import React, { useState } from "react";
import "./todo-item.css";

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
    <li className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleToggle}
        className="todo-checkbox"
      />
      {!isEditing && (
        <>
          <span
            className="todo-text"
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.text}
          </span>

          <span className="todo-action" onClick={handleEdit}>
            Edit
          </span>
        </>
      )}

      {isEditing && (
        <>
          <input
            type="text"
            value={editText}
            onChange={handleEditChange}
            className="edit-input"
          />
          <span className="todo-action" onClick={handleSave}>
            Save{" "}
          </span>
          <span className="todo-action" onClick={handleCancel}>
            Cancel
          </span>
        </>
      )}
      <span className="todo-action" onClick={handleDelete}>
        Delete
      </span>
    </li>
  );
};

export {TodoItem}