import React, { Component } from 'react';
import Counter from './Counter.js'

const style = {
    margin: '20px'
}

export default class ControlPanel extends Component {
    constructor (props){
        super(props);
        this.state={
            total:30
        }
    }
    render() {
        console.log('entry main render')
        return (
            <div style={style}>
                <Counter caption="First"  sumNumber={(count)=>{this.setState({total:this.state.total+count})}}/>
                <Counter caption="Second" initValue={10} sumNumber={(count)=>{this.setState({total:this.state.total+count})}}/>
                <Counter caption="Third" initValue={20} sumNumber={(count)=>{this.setState({total:this.state.total+count})}}/>
                <div>Total Count:{this.state.total}</div>
            </div>
        )
    }
    
}
//子组件与父组件通信:父组件利用props传递给子组件一个函数，子组件调用这个函数，传入一个参数，这个参数就是子组件向父组件发送的信息