import {ADD_TODO,TOGGLE_TODO,REMOVE_TODO} from './actionType.js';

export default (state = [],action) => {
    switch(action.type) {
      case ADD_TODO: {
       //给新增todo一个id
        return [
          {
            id: action.id,
            text: action.text,
            completed: false
          },
          ...state
        ]
      }
      case TOGGLE_TODO: {
        //找到与分发id相等待办项目,并且completed
        return state.map((todoItem) => {
          if (todoItem.id === action.id) {
             return {...todoItem, completed: !todoItem.completed};
          } else {
            return todoItem;
          }
        })
      }
      case REMOVE_TODO: {
        return state.filter((todoItem) => {
         //找到与分发id相等待办项目,并且删除
          return todoItem.id !== action.id;
        })
      }
      default: {
        return state;
      }
    }
  }