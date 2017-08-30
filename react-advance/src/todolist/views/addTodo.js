import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions';
class AddTodo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value:''
        }
        this.change=this.change.bind(this)
        this.submit=this.submit.bind(this)
    }

    change(e){
        this.setState({value:e.target.value})
    }

    submit(e){
        console.log(this.props)
        e.preventDefault()
        const inputValue=this.state.value;
        if (!inputValue.trim()) {
            return;
        }
        this.props.onAdd(inputValue) //mapDispatchToProps返回对象存在了组件的props中
        this.setState({value:''})
    }

    render() {
        return (
            <div className="addTodo">
                <form onSubmit={this.submit}>
                    <input className='newTodo' type='text' value={this.state.value} onChange={this.change}/>
                    <button type="submit">submit</button>
                </form>
            </div>
        )
    }

}

const mapDispatchToProps=(dispatch)=>{
    return {
        onAdd:(text)=>{
            dispatch(addTodo(text))
        }
    }   
}



export default connect(null, mapDispatchToProps)(AddTodo);

//mapDispatchToProps返回对象存在了组件的props中=.所以才有mapTo...Props
//mapDispatchToProps负责组件状态分发,mapStateProps负责获取store中的数据,这里不需要