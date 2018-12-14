import React, { Component } from 'react';
import './App.css';

import Header from './sites/components/Header';
import HomePage from './sites/Homepage';
import UserPanel from './sites/userPanel'

import {browserHistory} from 'react-router';



class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loggedIn: false,
            pageContents: <HomePage></HomePage>
        };
    }

    loginSuccess(user, hash) {
        browserHistory.push('/userPanel');
    }

    render() {
        return (
            <>
            <Header loginSuccess={this.loginSuccess} logged={this.state.loggedIn}></Header>
            {this.state.pageContents}
            </>
        );
    }
}

export default App;
