import React from 'react';

const Template = props => {
    return (
        <div style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            display: "inline-block",
            zIndex:"-1"
        }}>
        <img src="../../res/bgImg.png" alt="notFound.." height="100%" width="100%"/>
        </div>
    );
}

export default Template;