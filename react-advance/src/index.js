import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ContryPanel from './ContryPanel'

ReactDOM.render(<ContryPanel />, document.getElementById('root'));
registerServiceWorker();
