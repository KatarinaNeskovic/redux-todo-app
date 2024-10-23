import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../../store/actions";
import "./add-todo.css";
import { AddTodo } from "./add-todo";

const mapDispatchToProps = { addTodo };

export const AddTodoEnhanced = connect(null, mapDispatchToProps)(AddTodo);
