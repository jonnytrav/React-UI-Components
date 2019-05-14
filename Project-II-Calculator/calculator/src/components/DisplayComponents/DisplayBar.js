import React from 'react';
import "./Display.css";

const DisplayBar = props => (
    <div className="display-bar">{props.result}</div>
);

export default DisplayBar;