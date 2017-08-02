import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {addTodo} from '../actions';

class AddTodo extends Component {

  constructor(props, context) {
    super(props, context);

    this.onSubmit = this.onSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.state={
        value:''
    }
  }

  onSubmit(ev) {
    ev.preventDefault();

    const inputValue = this.state.value;
    if (!inputValue.trim()) {  //输入文字为空则返回
      return;
    }

    this.props.onAdd(inputValue);
    this.setState({value:''});  //清空
  }

  onInputChange(event){
    this.setState({value:event.target.value})
  }
//   refInput(node) {
//     this.input = node;
//   }

  render() {
    return (
      <div className="add-todo">
        <form onSubmit={this.onSubmit}>
          <input className="new-todo" onChange={this.onInputChange} value={this.state.value}/>
          <button className="add-btn" type="submit">
            添加
          </button>
        </form>
      </div>
    )
  }
}

AddTodo.propTypes = {
  onAdd: PropTypes.func.isRequired
};



///>?????
const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: (text) => {
      dispatch(addTodo(text));  
    }
  }
};

///???
export default connect(null, mapDispatchToProps)(AddTodo);