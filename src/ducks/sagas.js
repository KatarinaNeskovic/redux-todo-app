import { takeEvery,put,select } from "redux-saga/effects";
import Cookies from "js-cookie";
import {SET_FILTER} from "./filter-duck"
import {ADD_TODO,CLEAR_ALL_TODOS,DELETE_TODO,EDIT_TODO,TOGGLE_TODO} from './todo-duck'

//function to load cookies on application start

function* loadTodosfromCookies () {
    const todos = Cookies.getJSON('todos') || []
    yield put (setTodos(todos))
}