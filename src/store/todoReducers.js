import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  TOGGLE_TODO,
  CLEAR_ALL_TODOS,
} from "./todoActions";
import { v4 as uuidv4 } from "uuid";

const initialState = []; //array of todos

function todoReducer(state = initialState, action) {
  switch (action.type) {
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
  }
}

export default todoReducer;
