import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
// import TodoApp from './TodoApp'
import './index.css'
import store from './Store.js'
import Counter from './counter/view/counter.js'
// import BasicExample from './client/components/Main'

ReactDOM.render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.getElementById('root')
);
