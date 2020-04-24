import React from 'react';
import './Backdrop.css';

const Backdrop = props => {

    return (
        props.show ? <div onClick={props.closed} className="Backdrop" /> : null
    )
};

export default Backdrop;