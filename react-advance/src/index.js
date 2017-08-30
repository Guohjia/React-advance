import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import TodoApp from './TodoApp'
import './index.css'
import store from './Store.js'
// import Counter from './counter/view/counter.js'


ReactDOM.render(
  <Provider store={store}>
      <TodoApp />
  </Provider>,
  document.getElementById('root')
);
