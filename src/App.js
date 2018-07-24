import React, { Component } from 'react';
import './App.css';
import Todo from './model/Todo';
import TodoItem from './components/TodoItem';
import classNames from 'classnames';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.onShowFilterList(Todo.ALL)
  }

  add(event) {
    if (event.keyCode === 13 || event.button === 0) {
      const todo = new Todo(this.refs.newItem.value)
      const statusOfList = this.props.statusOfList
      this.props.onAdd(todo,statusOfList)
      this.refs.newItem.value = '';
    }
  }

  toggleActive(item) {
    const statusOfList = this.props.statusOfList
    this.props.onToggleActive(item,statusOfList)
  }

  showFilterList(event) {
    const statusOfList = event.target.attributes.getNamedItem('data-filter')
      .value;
    this.props.onShowFilterList(statusOfList)
  }

  updateItemContent(viewId, content) {
    const statusOfList = this.props.statusOfList
    this.props.onUpdateItemContent(viewId, content,statusOfList)
  }

  render() {

    return (
      <div className="container">
        <div>
          <h2>Jquery To Do List</h2>
          <p>
            <em>Simple Todo List with adding and filter by diff status.</em>
          </p>
        </div>
        <div>
          <input
            className="input-text"
            onKeyUp={e => this.add(e)}
            id="todo-creator"
            ref="newItem"
          />
          <div className="button" onClick={e => this.add(e)}>
            Add
          </div>
        </div>
        <div>
          <ol>
            {(() => {
              const { todoList } = this.props
              //console.log(todoList)
              return todoList.map(item => (
                <TodoItem
                  item={item}
                  key={item.id}
                  toggleActiveHandler={item => this.toggleActive(item)}
                  updateItemContent={(viewId, content) =>
                    this.updateItemContent(viewId, content)
                  }
                />
              ));
            })()}
          </ol>
        </div>
        
        <div>
          <ul className="filters">
            <li>
              <Link to="/all"
                onClick={e => this.showFilterList(e)}
                data-filter="all"
                className={classNames({
                  selected: this.props.statusOfList === Todo.ALL
                })}
              >
                ALL
              </Link>
            </li>
            <li>
              <Link to="/active"
                onClick={e => this.showFilterList(e)}
                data-filter="active"
                className={classNames({
                  selected: this.props.statusOfList === Todo.ACTIVE
                })}
              >
                Active
              </Link>
            </li>
            <li>
              <Link to="/completed"
                onClick={e => this.showFilterList(e)}
                data-filter="completed"
                className={classNames({
                  selected: this.props.statusOfList === Todo.COMPLETED
                })}
              >
                Complete
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
