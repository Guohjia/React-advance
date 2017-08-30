import {createStore, combineReducers} from 'redux';

import todoReducer from './todolist/reducer';
import filterReducer from './filter/reducer';


const reducer=combineReducers({
    todos:todoReducer,
    filter:filterReducer
})
const store= createStore(reducer,{})
export default store