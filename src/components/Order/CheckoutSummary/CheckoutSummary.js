import React from 'react';
import './CheckoutSummary.css';
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";

const CheckoutSummary = props => {
    return (
        <div className="CheckoutSummary">
            <h1>We hope it tastes well!</h1>
            <Burger ingredients={props.ingredients} />
            <Button
                clicked={props.cancelled}
                type="Danger"
            >
                Cancel
            </Button>
            <Button
                type="Success"
                clicked={props.continued}
            >
                Continue
            </Button>
        </div>
    );
};

export default CheckoutSummary;
