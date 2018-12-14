import React, {Component} from 'react';
import {Button} from 'reactstrap';

export default class PostForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            reservations: []
        };
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
                    <input ref="location" style={{width: "60%"}}></input>

                    <h4>Conference details</h4>
                    <textarea style={{height:"40%", width:"100%"}} type="textarea" name="text" ref="details"/>
                    <div style={{marginTop: "5%", textAlign: "right"}}>
                        <Button onClick={(e)=>{e.preventDefault(); this.props.submitConf(this.refs.location.value, this.refs.details.value)}} style={{backgroundColor: "#00000066"}}>Varaa</Button>
                    </div>
                </div>
            </div>
        );
    }
}