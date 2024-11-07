import { put, select, takeLatest, takeEvery, all } from "redux-saga/effects";
import Cookies from "js-cookie";
import { setTodos } from "./todo-duck";
import {
  ADD_TODO,
  CLEAR_ALL_TODOS,
  DELETE_TODO,
  EDIT_TODO,
  TOGGLE_TODO,
} from "./todo-duck";



/* function* loadTodosfromCookies () {
    const todos = Cookies.getJSON('todos') || []
    yield put (setTodos(todos))
} */


//handler saga to load cookies on application start
function* loadTodosfromCookies() {
  try {
    console.log ('enter loadTodosfromCookies')
    const todosStr = Cookies.get("todos"); // Get todos from cookies as a string
    if (typeof todosStr === "string") {
      const todos = todosStr ? JSON.parse(todosStr) : []; // Parse the JSON string if it exists
      console.log("Loaded Todos from Cookies:", todos);
      yield put(setTodos(todos)); // put is like saga's function for dispatch
    }
  } catch (error) {
    console.error("Error loading todos from cookies:", error);
  }
}

// handler saga to save todos to cookies
function* saveTodosToCookies() {
  const todos = yield select((state) => state.todos);
  const todosStr = JSON.stringify(todos);
  Cookies.set("todos", todosStr, { expires: 7 }); // Set cookie to expire in 7 days
  console.log("Saving Todos to Cookies:", todosStr);
}

// Watcher saga to load todos from cookies when the application starts
function* watchLoadTodos() {
  yield takeEvery("LOAD_TODOS_FROM_COOKIES", loadTodosfromCookies);
}

// Watcher saga to save todos to cookies whenever they change
function* watchSaveTodos() {
  yield takeEvery(
    [ADD_TODO, DELETE_TODO, EDIT_TODO, TOGGLE_TODO, CLEAR_ALL_TODOS],
    saveTodosToCookies
  );
}


export default function* rootSaga() {
  yield all([watchLoadTodos(), watchSaveTodos()]);
}
