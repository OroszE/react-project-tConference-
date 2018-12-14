import React, {Component} from 'react';

import {connect} from 'react-redux';

import {Button} from 'reactstrap';

import {pushConference} from './../../store/actions';

class PostForm extends Component {
    constructor(props) {
        super(props);

        this.onClick.bind(this);
    }

    onClick(e) {
        this.props.pushConference(this.refs.location.value, this.refs.details.value);
    }

    render() {
        return (
            
            <div style={{
                padding: "10%"
            }}>
                <div className="reservations" style={{
                    backgroundColor: "#FFFFFF66"
                }}>
                    <h1>Reserve a conference</h1>
                    <hr/>
                    
                    <h4>Location</h4>
                    <input className="formInput" ref="location" style={{width: "60%"}}></input>

                    <h4>Conference details</h4>
                    <textarea className="formInput" style={{height:"40%", width:"100%"}} type="textarea" name="text" ref="details"/>
                    <div style={{marginTop: "5%", textAlign: "right"}}>
                        <Button onClick={ (e) => {e.preventDefault(); this.onClick();}} style={{backgroundColor: "#00000066"}}>Varaa</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect((state) => {return state}, {pushConference})(PostForm)