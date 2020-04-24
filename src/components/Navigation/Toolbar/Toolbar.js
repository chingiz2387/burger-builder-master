import React from 'react';
import './Toolbar.css';
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

const Toolbar = props => {
    return (
        <header className="Toolbar">
            <div className="Toolbar-Logo">
                <Logo />
            </div>
            <nav>
                <NavigationItems />
            </nav>
        </header>
    );
};

export default Toolbar;
