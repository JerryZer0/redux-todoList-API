import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import App from './App'
import './index.css';
import counter from './reducers'
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker';
import Container from './container/TodoItemContainer'

const store = createStore(counter)
const rootEl = document.getElementById('root')

ReactDOM.render(
    <Provider store={store} >
        <Container />
    </Provider>,
    rootEl
)
registerServiceWorker();