import {createStore} from 'redux';
import reducer from './Reducer';

const initValues = {
  'First': 0,
  'Second': 10,
  'Third': 20
};

const store = createStore(reducer, initValues); //initValues作为初始state传递给reducer，也就是reducer的第一个参数state

export default store;