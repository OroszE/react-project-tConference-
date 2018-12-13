import React, { Component } from 'react';
// import './App.css';

import Header from './sites/components/Header.jsx';
import HomePage from './sites/Homepage.jsx';

import {browserHistory} from 'react-router';



class App extends Component {

    loginSuccess() {
        browserHistory.push('/userPanel');
    }

    render() {
        return (
            <>
            <Header loginSuccess={this.loginSuccess} loggedIn={false}></Header>
            <HomePage></HomePage>
            </>
        );
    }
}

export default App;
