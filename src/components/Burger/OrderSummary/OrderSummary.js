import React, {Fragment} from 'react';
import Button from "../../UI/Button/Button";

const OrderSummary = props => {
    console.log(props.ingredients);
    const ingredients = Object.keys(props.ingredients)
        .map(igKey => (
            <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
            </li>
        ));
    return (
        <Fragment>
            <h3>Your order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredients}
            </ul>
            <p>Total price: <b>{props.totalPrice}</b> KZT</p>
            <p>Continue to checkout?</p>
            <Button type="Danger" clicked={props.cancel}>Cancel</Button>
            <Button type="Success" clicked={props.continue}>Continue</Button>
        </Fragment>
    );
};

export default OrderSummary;
