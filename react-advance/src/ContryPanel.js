import React, { Component } from 'react';
import Counter from './Counter.js'

const style = {
    margin: '20px'
}

export default class ControlPanel extends Component {
    render() {
        console.log('entry main render')
        return (
            <div style={style}>
                <Counter caption="First" initValue={0}/>
                <Counter caption="Second" initValue={10}/>
                <Counter caption="Third" initValue={20}/>
                <button onClick={()=>this.forceUpdate()}>
                    Click me to re-render
                </button>
            </div>
        )
    }
}