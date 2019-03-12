


import React from 'react';
import { connect } from 'react-redux'



class Register extends React.Component {

    render(){
        return (
            <div> Register </div>
        );
    }

}



// export default Register;

const mapStateToProps = (state)=>{
    console.log(state)
    console.log('register')
    return {
        'aaa':123
    }
}



export default connect(mapStateToProps,null)(Register);
