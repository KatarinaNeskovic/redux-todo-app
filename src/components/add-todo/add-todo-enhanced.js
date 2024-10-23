
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../store/actions';
import './add-todo.css'

//kaze koji property je koja akcija
const mapDispatchToProps = {sendActionTodo:addTodo }; 

/* When addTodo(text) is called, it will dispatch the action { type: ADD_TODO, payload: { text } } to the Redux store.
 mapDispatchToProps automatically binds the addTodo action creator to the dispatch function.
 */
export default connect(null, mapDispatchToProps)(AddTodo);
/* here connect is used to inject props related to the Redux store to the component.
 At the same time, the component can still accept any regular props that are passed down by its parent.
 */

/* kad se promeni stanje Redux zove AddToDo da bi se renderovala opet sa novim stanjem

AddToDo({...mapStateToProps, ...mapDispatchToProps}) 


*/