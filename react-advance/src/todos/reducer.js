import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from './actionTypes';


export default (state = [], action) => {
    switch (action.type) {
        case ADD_TODO: {
            return [
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                },
                ...state
            ]
        }
        case TOGGLE_TODO:{
            return state.map((todoItem)=>{
                if(todoItem.id===action.id){
                    return {...todoItem,complete:!todoItem.completed}  //把上面的false变成true，标记为已经完成
                }else {
                    return todoItem
                }
            })
        }
        case REMOVE_TODO:{
            return state.filter((todoItem)=>{
                return todoItem.id!==action.id
            })
        }
        default:{
            return state;
        }
    }
}