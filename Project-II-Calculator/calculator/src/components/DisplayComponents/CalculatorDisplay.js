import React from 'react';
import './Display.css';
import NumberButton from '../ButtonComponents/NumberButton';
import ActionButton from '../ButtonComponents/ActionButton';
import WideButton from '../ButtonComponents/WideButton';
import DisplayBar from './DisplayBar';

const CalculatorDisplay = () => {
    return (
        <div className="containerr">
            <div className="result-container">
                <DisplayBar result={0}/>
            </div>
            <div className="row">
                <WideButton text="clear"/>
                <ActionButton text="÷"/>
            </div>
            <div className="row">
                <NumberButton number={7} />
                <NumberButton number={8}/>
                <NumberButton number={9}/>
                <ActionButton text="*"/>
            </div>
            <div className="row">
                <NumberButton number={4}/>
                <NumberButton number={5}/>
                <NumberButton number={6}/>
                <ActionButton text="-"/>
            </div>
            <div className="row">
                <NumberButton number={1}/>
                <NumberButton number={2}/>
                <NumberButton number={3}/>
                <ActionButton text="+"/>
            </div>
            <div className="row">
                <WideButton text="0"/>
                <ActionButton text="="/>
            </div>
        </div>
    );
};


export default CalculatorDisplay;