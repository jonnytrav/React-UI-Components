import React from 'react';
import './Card.css';
import CardContent from './CardContent';
import CardBanner from './CardBanner';

const CardContainer = () => (
    <a href="https://www.reactjs.org" class="card-container">
        <div class="inner-card-container">
            <CardBanner />
            <CardContent />
        </div>
    </a>   
);

export default CardContainer;