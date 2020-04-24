import React from 'react';
import './OrderItem.css';

const OrderItem = props => {
    return (
        <div className="OrderItem">
            <p>{props.customer.name} - {props.customer.street}</p>
            <p>
                Ingredients:
                {
                    Object.keys(props.ingredients).map(igkey => {
                        return <span key={igkey}>{igkey} ({props.ingredients[igkey]})</span>
                    })
                }
            </p>
            <p>Price: {props.price}</p>
        </div>
    );
};

export default OrderItem;
