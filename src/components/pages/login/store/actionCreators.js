
import axios from 'axios';





const changeLogin = (token) => ({
    type: 'CHANGE_LOGIN',
    value: {
        token: token
    }
})

export const logout = () => ({
    type: 'LOGOUT',
    value: false
})


export const login = (username, password) =>{
    return (dispatch) =>{

        if(username==='admin' && password === 'admin' ){
            let token = '22222222';
            dispatch(changeLogin(token))
        }
    }
}
