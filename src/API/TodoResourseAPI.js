import Todo from '../model/Todo';
import axios from 'axios'

const todosAPI = {
  todos: [],
  url:"http://localhost:8080/api/todos",

//   getAllTodo(statu,successCallBack) {
//     //console.log("api"+statu)
//     axios.get("//localhost:8080/api/todos")
//         .then((response) => {
//           console.log("data"+response.data._embedded.todos)
//             successCallBack(response.data._embedded.todos);
//         })
//         .catch((error) => {
//             console.log(error);
//         })
// },




  add(item,successCallBack) {
    axios.post(this.url,item)
    .then((response) => {
      console.log(response.data)
      //response.data._embedded.todos.map(todo=>console.log("data     "+todo.status))
        successCallBack(response.data._embedded.todos);
    })
    .catch((error) => {
        console.log(error);
    })
  },

  filerByStatus(status,successCallBack) {
    let url=this.url
    if (status === Todo.ALL) {
      url += "/search/statusOfTodos?status=completed,active"
    }else if(status === Todo.ACTIVE){
      url += "/search/statusOfTodos?status=active"
    }else{
      url += "/search/statusOfTodos?status=completed"
    }
    axios.get(url)
    .then((response) => {
      //response.data._embedded.todos.map(todo=>console.log("data     "+todo.status))
        successCallBack(response.data._embedded.todos);
    })
    .catch((error) => {
        console.log(error);
    })
  },
  
  toggleActive(item,successCallBack) {
    //let todo = this.todos.find(item => item.id === viewId);
    // if (todo !== undefined) {
    //   todo.toggleActive();
    // }

    const newStatus=item.status === "completed"?"active":"completed"
    axios.patch(`//localhost:8080/api/todos/${item.id}`,{"status": newStatus})
    .then((response) => {
      //response.data._embedded.todos.map(todo=>console.log("data     "+todo.status))
        successCallBack(response.data._embedded.todos);
    })
    .catch((error) => {
        console.log(error);
    })
  },
  updateItemContent(viewId, content) {
    let todo = this.todos.find(item => item.id === viewId);
    if (todo !== undefined) {
      todo.content = content;
    }
  }
};
export default todosAPI;
