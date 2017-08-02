import {ADD_TODO, TOGGLE_TODO, REMOVE_TODO} from './actionTypes';

let nextTodoId=0;

export const addTodo=(text)=>({   //箭头函数返回一个对象，外面需要加()
    type:ADD_TODO,
    completed:false,
    id:nextTodoId ++,
    text:text
});


export const toggleTodo=(id)=>({
    type:TOGGLE_TODO,
    id:id
});


export const removeTodo=(id)=>({
    type: REMOVE_TODO,
    id: id
})