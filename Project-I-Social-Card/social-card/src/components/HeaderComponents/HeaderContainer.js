import React from 'react';
import './Header.css';
import ImgThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';

const Header = () => (
    <div class="whole-header">
        <ImgThumbnail/>   
        <div class="header-content">
            <HeaderTitle/>
            <HeaderContent/>
        </div>
    </div>
);

export default Header;
