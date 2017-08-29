import React, {Component} from 'react';
// import {connect} from 'react-redux';  //将react state与recuder联系在一起
import store from '../Store'

export default class Counter extends Component{
    constructor(props){
        super(props)
        this.state={
            num:''
        }
        this.add=this.add.bind(this)
        this.increment=this.increment.bind(this)
    }

    add(){
        console.log('add...')
        store.dispatch({type:'add'})
        this.setState({num:store.getState()})
    }

    increment(){
        console.log('increment...')
        store.dispatch({type:'increment'})
        this.setState({num:store.getState()})
    }

    render(){
        return (
            <div className="counter">
                <h4 onClick={this.add}>Click Here to Add</h4>
                <h4 onClick={this.increment}>Click Here to increment</h4>
                <h3>now counter is</h3>
                <h2>{this.state.num}</h2>
            </div>
        )
    }
}

// const mapDispatchToProps=(dispatch) =>{
//     return {
//         onAdd:(num) => {
//             dispatch(addTodo(num));
//         }
// //     }
// // };

// export default connect(null,mapDispatchToProps)(Counter)

