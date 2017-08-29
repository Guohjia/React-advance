const reducer=(state=0,action)=>{
    switch(action.type){
        case 'add':
            return state+1;
        case 'increment':
            return state-1
        default:
            return state
    }
}

export default reducer



//reducer=>参数: state,action