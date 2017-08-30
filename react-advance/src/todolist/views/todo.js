import React ,{Component}from 'react'
import AddTodo from './addTodo'
import TodoList from './todoList'


class Todo extends Component {

    render() {
        return (
            <div className="todo">
                <AddTodo />
                <TodoList />
            </div>
        )
    }
}
// const Todo=()=>{
//     return (

//     )
// }

export default Todo