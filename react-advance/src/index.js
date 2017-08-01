import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'; //provider这次由react-redux提供
import ControlPanel from './views/ControlPane';
import './index.css';

import store from './Store.js';



//Provider组件包住最顶层的ControlPanel组件，也就context覆盖所有组件，所有组件都能拿到数据
ReactDOM.render(
  <Provider store={store}>
    <ControlPanel /> 
  </Provider>,
  document.getElementById('root')
);