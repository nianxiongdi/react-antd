


import React from 'react';
import { connect } from 'react-redux'
import {Input, Button, Form} from 'antd'
import './index.css';

import {actionCreators} from './store'

class Login extends React.Component {

    constructor(props){
        super(props);
        this.state ={
            username:"username",
            password:"password",
            requesting:false
        }

        this.handleSubmit.bind(this)
    }


    handleSubmit(e){
        console.log(e)
    }



    handleRegister(){
        console.log( this.props)
        this.props.history.push('/register')
    }
    render(){
        // console.log(this.props)
        // console.log(';;;;;;;;;;')

        console.log(this.state)

        return (
            <div id="loginDIV" style={{ backgroundColor:'red' }}>

                {/*debug模式下显示fork me on github*/}

                <div className="login">
                    <h1>XXX项目</h1>
                    <Form onSubmit={this.handleSubmit}>
                        {/*<input className="login-input" type="text" value={this.state.username}*/}
                               {/*onChange={this.handleUsernameInput} placeholder="用户名" required="required"/>*/}
                        <Input placeholder='账号' style={{marginBottom:'5px'}}    />

                        {/*<input className="login-input" type="password" value={this.state.password}*/}
                               {/*onChange={this.handlePasswordInput} placeholder="密码" required="required"/>*/}
                        <Input placeholder='密码'  style={{marginBottom:'5px'}} />


                        {/*<button className="btn btn-primary btn-block btn-large"*/}
                                {/*type="submit" disabled={this.state.requesting}>*/}
                            {/*登录*/}
                        {/*</button>*/}
                        <Button type="primary"  htmlType="submit" >登录</Button>
                        {/* 箭头函数绑定最外层的this  就是window */}
                        <Button type="primary" style={{marginLeft:'55%'}} onClick={ () => {this.handleRegister()} }>注册</Button>

                    </Form>
                </div>

            </div>
        );
    }

}


//映射到props中
// function mapStateToProps(state){
//     console.log(state.login)
//     // console.log(state.token)
//     console.log('‘’‘’')
//     // return {data:state}
//
//
//     return state;
// }

const mapStateToProps = (state)=>{
    // console.log(state.get('token'))
    // console.log(state.login)
    // console.log(state._root.entries[0][1])
    console.log(state.getIn(['login']).token)

    

    // return state;
    return {
        'aaa':123
    };
}



//函数映射到props中
function mapDispatchToProps(dispatch){
    return {
        login(username, password) {
            dispatch(actionCreators.login(username, password))
        }
    }
}




export default connect(mapStateToProps,mapDispatchToProps)(Login);

