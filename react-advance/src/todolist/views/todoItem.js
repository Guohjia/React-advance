import React  from 'react';
// import PropTypes from 'prop-types';

const TodoItem=({onToggle,onRemoveTodo,completed,text})=>{
    const checkedProp =completed?{checked:true}:{}
    return (
        <li
            style={{textDecoration: completed? 'line-through':'none'}}
            className="todo-item"
        >
            <input className="toggle" type="checkbox" {...checkedProp} readOnly onClick={onToggle} />
            <label className="text">{text}</label>
            <button className="remove" onClick={onRemoveTodo}>x</button>
        </li>
    )
}


// TodoItem.propTypes = {
//     onToggle: PropTypes.func.isRequired,
//     onRemove: PropTypes.func.isRequired,
//     completed: PropTypes.bool.isRequired,
//     text: PropTypes.string.isRequired
//   }

export default TodoItem


//展示组件