import * as types from '../constants/ActionTypes'

export const add = (todos) => {
    return { type: types.ADD_ITEM, todos }
}

export const showFilterList = (todos) => {
    return { type: types.SHOW_FILTER_LIST, todos }
}

export const updateItemContent = (todos) => {
    return { type: types.UPDATE_ITEM_CONTENT, todos }
}
export const deepCopy = (array) => {
    return JSON.parse(JSON.stringify(array));
}
export const toggleActive = (todos) => {
    return { type: types.TOGGLE_ACTIVE, todos }
}
export const componentDidMount = (todos)=>{
    return { type: types.COMPONENT_DID_MOUNT, todos }
}
