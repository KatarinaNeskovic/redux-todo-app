import { todosSelector } from "./todo-duck";
import { filterSelector } from "./filter-duck";
import { createSelector } from 'reselect';


export const filteredTodosSelector = createSelector (
  [todosSelector, filterSelector], (todos,filter) => {
  switch (filter) {
    case "SHOW_COMPLETED":
      return todos.filter((todo) => todo.completed);

    case "SHOW_ALL":
      return todos;

    case "SHOW_ACTIVE":
      return todos.filter((todo) => !todo.completed);

      default: 
      return todos
  }
}
);
