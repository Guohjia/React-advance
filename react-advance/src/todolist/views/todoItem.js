import React from 'react';

const TodoItem=({onToggle,onRemoveTodo,completed,text})=>{
    // const checkedProp =completed?{checked:true}:{}
    return (
        <li
            style={completed?{textDecoration:'line-through'}:{textDecoration:'none'}}
            className="todo-item"
        >
            <input className="toggle" type="checkbox" onClick={onToggle} />
            <label className="text">{text}</label>
            <button className="remove" onClick={onRemoveTodo}>x</button>
        </li>
    )
}

export default TodoItem


//展示组件