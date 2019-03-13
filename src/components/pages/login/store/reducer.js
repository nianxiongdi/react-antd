
const  initState = {
    token: '123'
}

/*
* state 数据更改前的状态， action数据更改后的状态
* */
export default (state=initState, action) => {
    // console.log('state')
    // console.log('state')
    // console.log(state)
    // console.log(action.type)
    switch (action.type){
        //登录
        case "CHANGE_LOGIN":
            console.log(action)

            const newState = JSON.parse(JSON.stringify(state));
            newState.token = action.value.token
            return newState;
        default:
            console.log('--default--')
            return state;

    }

}



