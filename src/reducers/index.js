import * as types from '../constants/ActionTypes'
import {deepCopy } from '../actions';

export default (state ={todoList:[],statusOfList: "all"} , action) => {
    const newState=deepCopy(state)
    switch (action.type) {

        case types.SHOW_FILTER_LIST:{
            newState.todoList = action.todos
            return newState
        }

        case types.ADD_ITEM:{
            newState.todoList = action.todos
            return newState
        }
        case types.UPDATE_ITEM_CONTENT:{
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