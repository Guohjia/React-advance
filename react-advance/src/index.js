import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Todo from './todolist/views/todo'
import './index.css'
import store from './Store.js'
// import Counter from './counter/view/counter.js'


ReactDOM.render(
  <Provider store={store}>
    <Todo />
  </Provider>,
  document.getElementById('root')
);
