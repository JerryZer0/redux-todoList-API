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
        onAdd: (todo, statusOfList) => {
            todosAPI.add(todo, statusOfList, todos => dispatch(add(todos)))
        },

        onShowFilterList: statusOfList => {
            todosAPI.filerByStatus(statusOfList,
                todos => dispatch(showFilterList(todos)))
        },

        onUpdateItemContent: (viewId, content, statusOfList) => {
            todosAPI.updateItemContent(viewId, content, statusOfList,
                todos => dispatch(updateItemContent(todos)))
        },

        onToggleActive: (item, statusOfList) => {
            todosAPI.toggleActive(item, statusOfList,
                todos => dispatch(toggleActive(todos)))
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)