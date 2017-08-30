import {createStore} from 'redux';
import reducer from './todolist/reducer'


const store= createStore(reducer)
export default store