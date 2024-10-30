// -------------------------------------------------------------------------------------------------
// Action types

import { actionType } from "./action-type";

// -------------------------------------------------------------------------------------------------
export const SET_FILTER = actionType('SET_FILTER')
 ;

// -------------------------------------------------------------------------------------------------
// Action creators
// -------------------------------------------------------------------------------------------------

export const setFilter = (filter)=> ({
  type:SET_FILTER,
  payload: filter
}
)

// -------------------------------------------------------------------------------------------------
// Reducer
// -------------------------------------------------------------------------------------------------

const initialState = 'SHOW_ALL'; //array of todos

export function filterReducer(state = initialState, action) {
  switch (action.type) {
    case SET_FILTER:
      return action.payload

    default:
      return state;
  }
}

// -----------------------------------------------------------------
// Selectors
// -----------------------------------------------------------------

export const filterSelector = (state)=>state.filter