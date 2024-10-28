import { SET_FILTER } from "./actions";

const initialState = "SHOW_ALL";
export function filterReducer(state = initialState, action) {
  switch (action.type) {
    case SET_FILTER:
      return action.payload; // sets the current filter state based on the action (show all, show completed, etc.)
    default:
      return state;
  }
}
