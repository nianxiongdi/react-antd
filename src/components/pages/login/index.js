


import React from 'react';
import { connect } from 'react-redux'
import {Input, Button} from 'antd'
import './index.css';


class Login extends React.Component {


    constructor(props){
        super(props);
        this.state ={
            username:"",
            password:"",
            requesting:false
        }
    }


    handleRegister(){
        console.log( this.props)
        this.props.history.push('/register')
    }
    render(){
        return (
            <div id="loginDIV" style={{ backgroundColor:'red' }}>

                {/*debug模式下显示fork me on github*/}

                <div className="login">
                    <h1>XXX项目</h1>
                    <form onSubmit={this.handleSubmit}>
                        {/*<input className="login-input" type="text" value={this.state.username}*/}
                               {/*onChange={this.handleUsernameInput} placeholder="用户名" required="required"/>*/}
                        <Input placeholder='账号' style={{marginBottom:'5px'}}  />

                        {/*<input className="login-input" type="password" value={this.state.password}*/}
                               {/*onChange={this.handlePasswordInput} placeholder="密码" required="required"/>*/}
                        <Input placeholder='密码'  style={{marginBottom:'5px'}} />


                        {/*<button className="btn btn-primary btn-block btn-large"*/}
                                {/*type="submit" disabled={this.state.requesting}>*/}
                            {/*登录*/}
                        {/*</button>*/}
                        <Button type="primary"  >登录</Button>
                        <Button type="primary" style={{marginLeft:'55%'}} onClick={ () => {this.handleRegister()} }>注册</Button>

                    </form>
                </div>

            </div>
        );
    }



}


export default connect(null,null)(Login)

