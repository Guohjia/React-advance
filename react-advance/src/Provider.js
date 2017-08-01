import  { Component} from 'react';
import PropTypes from 'prop-types';


//通过provider来传递只读的全局store，来避免深层次的props传递
class Provider extends Component {

  getChildContext() {
    return {
      store: this.props.store //获取全局store,以提供给下层组件
    };
  }

  render() {
    return this.props.children;//把渲染工作完全交给子组件
  }

}

Provider.propTypes = {
  store: PropTypes.object.isRequired
}

Provider.childContextTypes = {  //让React认可Provider是一个context的提供者
  store: PropTypes.object
};

export default Provider;


// 1.获取全局只读store(getChildContext)
// 2.将渲染交给子组件(也就是顶层组件ControlPanel),使得所有组件获得context
// 3.定义childContextType,同时让使用context的组件定义相同的contextTypes，使context生效
//Provider.childContextTypes = {  //让React认可Provider是一个context的提供者
//   store: PropTypes.object
// };
//CounterContainer.contextTypes = { //和provider 保持一致
//   store: PropTypes.object
// }
// 4.子组件通过context获取数据(this.context.store.dispatch(Actions.increment(如this.props.caption));)
// 5.弊端:context为全局变量，一处改变，全局改变，慎用！不过用了传递全局**只读**的store还是可行的