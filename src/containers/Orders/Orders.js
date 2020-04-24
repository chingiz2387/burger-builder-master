import React, {Component} from 'react';
import axios from '../../axios-order';
import OrderItem from "../../components/Order/OrderItem/OrderItem";
import withErrorHandler from "../../HOC/withErrorHandler";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import {connect} from "react-redux";
import {fetchOrders} from "../../store/actions/actions";
import Spinner from "../../components/UI/Spinner/Spinner";


class Orders extends Component {
    componentDidMount() {
        this.props.fetchOrders();
    }

    render() {
        if (this.props.loading) {
            return <Spinner />;
        }
        return (
            <div>
                {
                    Object.keys(this.props.orders).map(orderId => {
                        const order = this.props.orders[orderId];
                        return (
                            <ErrorBoundary key={orderId}>
                                <OrderItem
                                    ingredients={order.ingredients}
                                    price={order.price}
                                    customer={order.customer}
                                />
                            </ErrorBoundary>
                        );
                    })
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        orders: state.orders.orders,
        loading: state.orders.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchOrders: () => dispatch(fetchOrders())
    }
};

const newOrders = withErrorHandler(Orders, axios);
export default connect(mapStateToProps, mapDispatchToProps)(newOrders);
