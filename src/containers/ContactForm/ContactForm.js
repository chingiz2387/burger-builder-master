import React, {Component, Fragment} from 'react';

import Button from "../../components/UI/Button/Button";
import './ContactForm.css';
import Spinner from "../../components/UI/Spinner/Spinner";
import {connect} from "react-redux";
import {createOrder} from "../../store/actions/actions";
import {Redirect} from "react-router";

class ContactForm extends Component {
    state = {
        name: '',
        email: '',
        street: '',
        postal: '',
    };

    inputChangeHandler = e => {
        this.setState({[e.target.name]: e.target.value});
    };

    render() {
        if(this.props.isOrdered) {
            return <Redirect to={'/'} />
        }
        let form;
        if (this.props.loading) {
            form = <Spinner/>
        } else {
            form = (
                <form onSubmit={(e) => this.props.onOrderCreated(e, this.state)}>
                    <input
                        onChange={this.inputChangeHandler}
                        value={this.state.name}
                        className="Input"
                        type="text"
                        name="name"
                        placeholder="Your Name"
                    />
                    <input
                        onChange={this.inputChangeHandler}
                        value={this.state.email}
                        className="Input"
                        type="email"
                        name="email"
                        placeholder="Your Mail"
                    />
                    <input
                        onChange={this.inputChangeHandler}
                        value={this.state.street}
                        className="Input"
                        type="text"
                        name="street"
                        placeholder="Street"
                    />
                    <input
                        onChange={this.inputChangeHandler}
                        value={this.state.postal}
                        className="Input"
                        type="text"
                        name="postal"
                        placeholder="Postal Code"/>
                    <Button type="Success">ORDER</Button>
                </form>
            );
        }

        return (
            <Fragment>
                <div className="ContactData">
                    <h4>Enter your Contact Data</h4>
                    {form}
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        ingredients: state.burger.ingredients,
        price: state.burger.totalPrice,
        loading: state.orders.loading,
        isOrdered: state.orders.isOrdered
    };
};
const mapDispatchToProps = dispatch => {
    return {
        onOrderCreated: (e, customer) => dispatch(createOrder(e, customer))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
