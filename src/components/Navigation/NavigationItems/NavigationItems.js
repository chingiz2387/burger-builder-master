import React from 'react';
import './NavigationItems.css';
import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = props => {
    return (
        <ul className="NavigationItems">
            <NavigationItem to="/" exact>Burger Builder</NavigationItem>
            <NavigationItem to={"/orders/about"}>Orders</NavigationItem>
        </ul>
    );
};

export default NavigationItems;
