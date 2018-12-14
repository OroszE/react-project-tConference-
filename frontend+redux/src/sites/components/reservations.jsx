import React, {Component} from 'react';
import {connect} from 'react-redux'

import SingleReservation from './singleReservation';

import {getConferences} from './../../store/actions'

class Reservations extends Component {
    constructor(props) {
        super(props);

        this.state = {
            reservations: []
        };
    }

    componentWillMount() {
        this.props.getConferences();
    }

    componentWillReceiveProps(props) {
        var newReservations = [];
        console.log(props.reservs);
        props.reservs.forEach(reservation => {
            newReservations.push(<SingleReservation reservation={reservation}/>);
        });

        this.setState({
            reservations: newReservations
        });
    }

    render() {
        return (
            <div style={{
                padding: "10%"
            }}>
                <div className="reservations">
                    {this.state.reservations}
                </div>
            </div>
        );
    }
}

export default connect(state => {
    return {
        reservs: state.reservations
    }   
}, {getConferences})(Reservations)