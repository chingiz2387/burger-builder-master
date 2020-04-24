import React from 'react';
import {NavLink} from "react-router-dom";

const NavigationItem = props => {
    return (
        <li className="NavigationItem">
            <NavLink to={props.to} exact={props.exact}>{props.children}</NavLink>
        </li>
    );
};

export default NavigationItem;
