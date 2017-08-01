import React from 'react';
import PropTypes from 'prop-types';


import * as Actions from '../Action';
import {connect} from 'react-redux';

const buttonStyle = {
  margin: '10px'
};

function Counter({caption, onIncrement, onDecrement, value}) {
  return (
    <div>
      <button style={buttonStyle} onClick={onIncrement}>+</button>
      <button style={buttonStyle} onClick={onDecrement}>-</button>
      <span>{caption} count: {value}</span>
    </div>
  );
}

Counter.propTypes = {
  caption: PropTypes.string.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired
};

//Store上的state=>props
function mapStateToProps(state, ownProps) {
  return {
    value: state[ownProps.caption]                      //=>容器组件做的事情,react-redux搞定
  }
}

//傻瓜式组件内部暴露的函数类型的prop关联上dispatch
function mapDispatchToProps(dispatch, ownProps) {
  return {
    onIncrement: () => {
      dispatch(Actions.increment(ownProps.caption));
    },
    onDecrement: () => {
      dispatch(Actions.decrement(ownProps.caption));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);//连续两次调用，第一次做上述两件数，返回一个总函数，第二次整个总函数接受Counter这个傻瓜式组件(作为参数)，开始对其做容器组件做的事


