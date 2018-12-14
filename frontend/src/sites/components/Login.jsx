import React, {Component} from 'react';
import {Button, Form, Label} from 'reactstrap'

export default class Login extends Component {

    render() {
        return (
        <div style={{
            width: "100%",
            display: "inline-block",
            marginRight: "10px",
            marginLeft: "10px"
        }}>
            <h1>Login</h1>
            <hr/>
            <Form>
                <Label>Username</Label>
                <input ref="user" className="loginInput" placeholder="Enter a username"/>
                <Label>Password</Label>
                <input ref="pass" className="loginInput" placeholder="Enter a password"/>
                <div style={{
                    display: "inline-block",
                    width: "100%",
                    marginTop: "10px"
                }}>
                    <Button onClick={(e)=>{e.preventDefault(); this.props.onLogin(this.refs.user.value, this.refs.pass.value)}} color="#00FF00">Login</Button>
                </div>
                
                </Form>
        </div>       
        );
    }
}