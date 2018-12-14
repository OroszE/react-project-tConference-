import React from 'react';
import {Provider} from 'react-redux';

import Template from './components/template';
import Header from './components/Header';

import Reservations from './components/reservations'
import PostForm from './components/postform'

import {store} from '../store';

const UserPanel = (props) => {
    return (
        <Provider store={store}>
            <Header logged={true} />
            <Template />
            <div style={{ position:"absolute", height: "100%", width: "100%" }}>
                <div style={{ width: "50%", height: "100%", float: "left"}}>
                    <Reservations />
                </div>
                <div style={{width: "50%", height: "100%", float: "left"}}>
                    <PostForm />
                </div>
            </div>
        </Provider>
    );
}

export default UserPanel