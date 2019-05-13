import React from 'react';
import './Button.css';

const WideButton = props => {
    return (
        <div className="default-button wide-button">
        <div>{props.text}</div>
        </div>
    );
};

export default WideButton