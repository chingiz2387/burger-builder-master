import React, {Component, Fragment} from 'react';
import {Route} from 'react-router-dom';

import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactForm from "../ContactForm/ContactForm";
import {connect} from "react-redux";

class Checkout extends Component {
    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    };

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    };

    render() {
        return (
            <Fragment>
                <CheckoutSummary
                    ingredients={this.props.ingredients}
                    cancelled={this.checkoutCancelledHandler}
                    continued={this.checkoutContinuedHandler}
                />
                <Route
                    path={this.props.match.path + '/contact-data'}
                    component={ContactForm}
                />
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        ingredients: state.burger.ingredients,
        price: state.burger.totalPrice
    };
};

export default connect(mapStateToProps)(Checkout);
