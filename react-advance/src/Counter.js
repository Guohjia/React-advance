import React,{Component} from 'react';

const buttonStyle={
    margin:'10px'
}

export default class Counter extends Component{
    constructor(props){
        console.log('entry constructor'+props.caption);
        super(props);

        this.onClickIncrementButton=this.onClickIncrementButton.bind(this)
        this.onClickDecrementButton=this.onClickDecrementButton.bind(this)
        this.state={
            count:props.initValue||0
        }
    }
    componentWillReceiveProps(nextProps){
        console.log('entry componentWillReceiveProps'+this.props.caption)
    }
    componentWillMount(){
        console.log('componentWillMount'+this.props.caption)
    }
    componentDidMount(){
        console.log('componentDidMount'+this.props.caption)
    }
    onClickIncrementButton(){
        this.setState({count:this.state.count+1})
        this.props.sumNumber(1)
    }
    onClickDecrementButton(){
        this.setState({count:this.state.count-1})
        this.props.sumNumber(-1)
    }
    shouldComponentUpdate(nextProps, nextState) {
        return (nextProps.caption !== this.props.caption) ||  //渲染优化，只有档caption和count改变的时候自组件才会重新渲染.
               (nextState.count !== this.state.count);
    }

    render(){
        console.log('enter render'+this.props.caption+'1')
        const {caption}=this.props;
        return (
            <div>
                <button style={buttonStyle} onClick={this.onClickIncrementButton}>+</button>
                <button style={buttonStyle} onClick={this.onClickDecrementButton}>-</button>
                <span>{caption} count:{this.state.count}</span>
            </div>
        );
    }
    // componentDidUpdate(){
    //     this.props.sumNumber(this.state.count)
    // }
}

// Counter.propTypes = {
//   caption: PropTypes.string.isRequired,
//   initValue: PropTypes.number
// };

// Counter.defaultProps = {
//   initValue: 0
// };