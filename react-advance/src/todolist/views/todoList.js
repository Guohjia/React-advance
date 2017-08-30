import React from 'react'
import TodoItem from './todoItem.js';
import {connect} from 'react-redux';
import {toggleTodo,removeTodo} from '../actions.js';
import './style.css'
const TodoList=({todos,onToggleTodo,onRemoveTodo})=>{
    return (
        <ul>
            {
                todos.map((item)=>(
                    <TodoItem  
                        key={item.id}
                        text={item.text}
                        completed={item.completed}
                        onToggle={()=>onToggleTodo(item.id)}
                        onRemoveTodo={()=>onRemoveTodo(item.id)}
                    />
                ))
            }
        </ul>
    )
}

const mapStateTopProps=(state)=>{
    return {
        todos:state
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        onToggleTodo:(id)=>{
            dispatch(toggleTodo(id));
        },
        onRemoveTodo:(id)=>{
            dispatch(removeTodo(id))
        }
    }
}

export default connect(mapStateTopProps,mapDispatchToProps)(TodoList)


//容器组件