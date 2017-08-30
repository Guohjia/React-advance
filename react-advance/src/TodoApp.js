import React from 'react'
import Todo from './todolist/views/todo'
import Filters from './filter/views/filters'

function TodoApp(){
    return (
        <div>
             <Todo />
             <Filters />
        </div>
    )
}

export default TodoApp