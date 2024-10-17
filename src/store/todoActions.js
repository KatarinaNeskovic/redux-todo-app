export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const CLEAR_ALL_TODOS = 'CLEAR_ALL_TODOS'
export const FILTER_ALL_TODOS = 'FILTER_ALL_TODOS'
export const FILTER_COMPLETED_TODOS = 'FILTER_COMPLETED_TODOS'
export const FILTER_LEFT_TODOS = 'FILTER_LEFT_TODOS'

//setting action creators

/* export const filterCompletedTodos = (id) => {
  type: FILTER_COMPLETED_TODOS
  payload: {id}
}

export const filterAllTodos = () => {
  type: FILTER_COMPLETED_TODOS
} */
export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: { text }, //creating an object with text property, so that we can expand potentially in the future i.e { text, priority, dueDate }
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
