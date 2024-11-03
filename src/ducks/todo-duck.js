// -------------------------------------------------------------------------------------------------
// Action types

import { actionType } from "./action-type";
import { v4 as uuidv4 } from "uuid";

// -------------------------------------------------------------------------------------------------
export const ADD_TODO = actionType("ADD_TODO");
export const TOGGLE_TODO = actionType("TOGGLE_TODO");
export const EDIT_TODO = actionType("EDIT_TODO");
export const DELETE_TODO = actionType("DELETE_TODO");
export const CLEAR_ALL_TODOS = actionType("CLEAR_ALL_TODOS");
export const SET_TODOS = actionType("SET_TODOS");

// -------------------------------------------------------------------------------------------------
// Action creators
// -------------------------------------------------------------------------------------------------

export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: { text }, //creating an object with text property, so that I can expand potentially in the future i.e { text, priority, dueDate }
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: { id }, //same here, creating an object just in case
});

export const editTodo = (id, text) => ({
  type: EDIT_TODO,
  payload: { id, text },
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: { id },
});

export const clearAllTodos = () => ({
  type: CLEAR_ALL_TODOS,
});

export const setTodos = () => ({
  type: SET_TODOS,
  payload: { todos },
});

// -------------------------------------------------------------------------------------------------
// Reducer
// -------------------------------------------------------------------------------------------------

const initialState = []; //array of todos

export function todoReducer(state = initialState, action) {
  switch (action.type) {
    //This means that when the SET_TODOS action is dispatched, the reducer is using the todos data provided by the action itself.
    case SET_TODOS:
      return action.payload.todos

    case ADD_TODO:
      return [
        ...state,
        { id: uuidv4(), text: action.payload.text, completed: false },
      ];

    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload.id);

    case TOGGLE_TODO:
      return state.map(
        (todo) =>
          todo.id === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        /* if the id matches the action id, return the list of todos and for the specific one change the completed status (toggle it).
        If not, return the unchanged todo
         */
      );

    case EDIT_TODO: {
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo
      );
    }

    case CLEAR_ALL_TODOS:
      return [];

    default:
      return state;
  }
}

// -----------------------------------------------------------------
// Selectors
// -----------------------------------------------------------------

export const todosSelector = (state) => state.todos;
