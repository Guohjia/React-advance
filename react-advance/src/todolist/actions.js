import {ADD_TODO,TOGGLE_TODO,REMOVE_TODO} from './actionType.js'

let nextTodoId=0;  //生成一个id给每个todo进行标识，作为key，可以进行删除完成等
export const addTodo=(text)=>({
    type:ADD_TODO,
    completed:false,
    id:nextTodoId ++,
    text: text
});

export const toggleTodo=(id)=>({
    type:TOGGLE_TODO,
    id:id
});

export const removeTodo=(id)=>({
    type:REMOVE_TODO,
    id:id
})