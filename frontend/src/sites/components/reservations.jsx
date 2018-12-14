import React, {Component} from 'react';

export default class Reservations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reservations: []
        };
    }
    componentWillReceiveProps(props) {
        console.log(props.reservs);
        this.setState({
            reservations: props.reservs
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