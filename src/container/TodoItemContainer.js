import { connect } from 'react-redux';
import App from '../App'
import todosAPI from '../API/TodoResourseAPI'
import { showFilterList, add, updateItemContent, toggleActive } from '../actions';

const mapStateToProps = (state) => {
    return {
        todoList: state.todoList,
        statusOfList: state.statusOfList
    }
}

const mapDispatchToProps = dispatch => {

    return {
        onAdd: (todo) => {
            todosAPI.add(todo, todos => dispatch(add(todos)))
        },

        onShowFilterList: statusOfList => {
            todosAPI.filerByStatus(statusOfList,
                todos => dispatch(showFilterList(todos)))
        },

        onUpdateItemContent: (viewId, content, statusOfList) => {
            todosAPI.updateItemContent(viewId, content,
                todos => dispatch(updateItemContent(todos)))
        },

        onToggleActive: (item, statusOfList) => {
            todosAPI.toggleActive(item,
                todos => dispatch(toggleActive(todos)))
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)