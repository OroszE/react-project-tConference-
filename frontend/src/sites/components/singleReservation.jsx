import React from 'react';

const SingleReservation = props => {
    return (
        <div style={{
            backgroundColor: "#FFFFFF66",
            borderRadius: "10px"
        }}>
            <h1 style={{paddingLeft: "5px"}}>{props.reservation.title}</h1>
            <hr/>
            <p style={{paddingLeft: "5px"}}>{props.reservation.content}</p>
        </div>
    );
};

export default SingleReservation;