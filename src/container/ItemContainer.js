// import { connect } from 'react-redux';
// import Item from '../components/TodoItem';
// import todosAPI from '../API/TodoResourseAPI';
// import { toggleActive, changeToEditable,updateItem } from '../actions';

// const mapStateToProps = (state) => {
//     //console.log(state.editstatus)
//     return {
//         editstatus: state.editstatus
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         onToggleActive: (viewId) => {
//             const todos = todosAPI.toggleActive(viewId);
//             dispatch(toggleActive(todos))
//         },
//         onChangeToEditable: (viewId) => {
//             const todos = todosAPI.toggleActive(viewId);
//             dispatch(changeToEditable(todos))
//         },
//         onUpdateItem: (viewId) => {
//             const todos = todosAPI.toggleActive(viewId);
//             dispatch(updateItem(todos))
//         }
//     }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Item)