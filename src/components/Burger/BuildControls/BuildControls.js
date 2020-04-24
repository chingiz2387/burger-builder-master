import React from 'react';
import './BuildControls.css';
import BuildControl from "./BuildControl/BuildControl";

const controls = [
    {type: 'meat'},
    {type: 'salad'},
    {type: 'bacon'},
    {type: 'cheese'}
];

const BuildControls = props => {
    return (
        <div className="BuildControls">
            <p>Total Price: {props.totalPrice}</p>
            {
                controls.map(control => {
                    return <BuildControl
                                disabled={props.disabled[control.type]}
                                key={control.type}
                                type={control.type}
                                add={() => props.added(control.type)}
                                remove={() => props.removed(control.type)}
                            />
                })
            }
            <button
                onClick={props.ordered}
                className="OrderButton"
                disabled={!props.purchasable}
            >
                Order
            </button>
        </div>
    );
};

export default BuildControls;