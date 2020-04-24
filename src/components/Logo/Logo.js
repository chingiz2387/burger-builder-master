import React from 'react';
import burgerLogo from '../../assets/images/burger_logo.png';
import './Logo.css';

const Logo = () => {
    return (
        <div className="Logo">
            <img src={burgerLogo} alt="Burger Builder"/>
        </div>
    );
};

export default Logo;
