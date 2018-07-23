import { connect } from 'react-redux';
import App from '../App'
import todosAPI from '../API/TodoResourseAPI'
import {
    showFilterList, deepCopy, add, updateItemContent,
    toggleActive, componentDidMount
} from '../actions';
import Todo from '../model/Todo';

const mapStateToProps = (state) => {
    return {
        todoList: state.todoList,
        statusOfList: state.statusOfList
    }
}

const mapDispatchToProps = dispatch => {

    return {
        onAdd: (todo) => {
            todosAPI.add(todo,todos=>dispatch(this.todoList.push(),add(todos)))
        },

        onShowFilterList: statusOfList => {
            //return this.todos.filter(item => item.status === status);
            //console.log(statusOfList)
            // const todos = deepCopy(todosAPI.filerByStatus(statusOfList))
            todosAPI.filerByStatus(statusOfList,
                todos => dispatch(showFilterList(todos)))
            //console.log(todos)
            //dispatch(successCallBack(todos))
        },
        // onUpdateItemContent: (viewId, content, statusOfList) => {
        //     todosAPI.updateItemContent(viewId, content)
        //     const todos = deepCopy(todosAPI.filerByStatus(statusOfList))
        //     dispatch(updateItemContent(todos))
        // },
        
        onToggleActive: (item, statusOfList) => {
            todosAPI.toggleActive(item,
                todos => dispatch(toggleActive(todos)))
            // todosAPI.toggleActive(viewId)
            // const todos = deepCopy(todosAPI.filerByStatus(statusOfList))
            // dispatch(toggleActive(todos))
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)