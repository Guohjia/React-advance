import React from 'react';
import {connect} from 'react-redux'
import {setFilter} from '../actions.js'

const Link=({active,onClick,children,selected})=>{
    if(active) {
        return <b className="filter selected">{selected}</b>
    }else{
        return (
            <a href="#" className="filter not-selected" onClick={
                (e)=>{e.preventDefault();onClick()}
            }>
            {children}
            </a>
        )
    }
}

const mapStateToProps=(state,ownProps)=>{
    return {
        active:state.filter === ownProps.filter, //根据reducer中的filter筛选当前todo
        selected:state.filter
    }
}

const mapDispatchToProps=(dispatch,ownProps)=>({
    onClick:()=>{
        dispatch(setFilter(ownProps.filter))
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Link)