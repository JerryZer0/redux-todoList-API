import * as types from '../constants/ActionTypes'
import Todo from '../model/Todo';
import todosAPI from '../API/TodoResourseAPI'
import {deepCopy } from '../actions';

export default (state ={todoList:[],statusOfList: "all"} , action) => {
    const newState=deepCopy(state)
    switch (action.type) {

        case types.SHOW_FILTER_LIST:{
            //console.log(action.todos)
            //const todo = action.todos
            
            newState.todoList = action.todos
            return newState
        }

        case types.ADD_ITEM:{
            // const newState = deepCopy(state)
            newState.todoList = action.todos
            return newState
        }
        case types.UPDATE_ITEM_CONTENT:{
            // const newState = deepCopy(state)
            newState.todoList = action.todos
            return newState
        }
        case types.TOGGLE_ACTIVE:{
            newState.todoList = action.todos
            return newState
        }
        default:
            return state
    }
}