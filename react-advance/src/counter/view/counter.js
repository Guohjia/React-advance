import React  from 'react';
// import {connect} from 'react-redux';  //将react state与recuder联系在一起
// import store from '../Store'
import { connect } from 'react-redux';

//  class Counter extends Component{
//     constructor(props){
//         super(props)
//         this.state={
//             num:'2'
//         }
//         // this.add=this.add.bind(this)
//         // this.increment=this.increment.bind(this)
//     }

//     // add(){
//     //     console.log('add...')
//     //     store.dispatch({type:'add'})
//     //     this.setState({num:store.getState()})
//     // }

//     // increment(){
//     //     console.log('increment...')
//     //     store.dispatch({type:'increment'})
//     //     this.setState({num:store.getState()})
//     // }

//     render(){
//         return (
//             <div className="counter">
//                 <h4 onClick={add}>Click Here to Add</h4>
//                 <h4 onClick={increment}>Click Here to increment</h4>
//                 <h3>now counter is</h3>
//                 <h2>{this.state.num}</h2>
//             </div>
//         )
//     }
// }
function Counter({increment, decrement, value}) {  //ES6解构赋值
  return (
    <div className="counter">
      <h4 onClick={increment}>Click Here to Add</h4>
      <h4 onClick={decrement}>Click Here to increment</h4>
      <h3>now counter is</h3>
      <h2>{value}</h2>
    </div>
  )
}

function mapStateToProps(state, ownProps) {
  return {
    value: state
  }
}

function mapDispatchToProps(dispatch, ownProps) {    //
  return {
    increment: () => {
      console.log('increment...')
      dispatch({ type: 'increment' })
    },
    decrement: () => {
      console.log('decrement...')
      dispatch({ type: 'decrement' })
    },
  }
}
// const mapDispatchToProps=(dispatch) =>{
//     return {
//         onAdd:(num) => {
//             dispatch(addTodo(num));
//         }
//     }
// };

export default connect(mapStateToProps, mapDispatchToProps)(Counter)



//connect 整合了mapStateToProps，mapDispatchToProps两个函数,他们的返回值作为counter的参数传入
//而他们内部以及返回值联系到了store和reducer

//总体思路
/**
 * 1.首先生成一个store=>数据存储(由redux内部完成,我们不用关系怎么存,只关心存什么)
 * 2.通过dispatch分发action到reducer
 * 3.reducer通过actionType改变store
 * 4.接下来要通过react-redux将store于react组件状态关联起来
 * 5.但是由于state是内部状态,不好访问,所以只能通过外部状态props来关联
 * 6.mapStateToProps可以直接拿到reducer中的数据,然后通过返回值将数据直接映射到组件内部中，每次store改变都会反映在组件状态显示上
 * 7.通过mapDispatchToProps返回的dispatch方法来dispatch action
 * 8.通过connect将mapStateToProps，mapDispatchToProps联系到一起,而组件作为他们的参数传入,可以拿到他们的返回值
 */