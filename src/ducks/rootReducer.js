import { combineReducers } from 'redux'
import {todoReducer} from './todo-duck' 
import  {filterReducer}  from './filter-duck'

const rootReducer = combineReducers ({
    todos: todoReducer,
    filter: filterReducer
})

export default rootReducer
