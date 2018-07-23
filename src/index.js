import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import App from './App'
import './index.css';
import counter from './reducers'
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker';
import Container from './container/TodoItemContainer'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const store = createStore(counter)
const rootEl = document.getElementById('root')

ReactDOM.render(
    <Provider store={store} >
        {/* <Container /> */}
        <Router>
            <div>
                <Route exact path="/" component={Container}></Route>
                <Route exact path="/:status" component={Container}></Route>
            </div>
        </Router>
    </Provider>,
    rootEl
)
registerServiceWorker();