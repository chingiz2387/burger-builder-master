import React, {Component, Fragment} from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import {connect} from "react-redux";
import {addIngredient, orderCompleted, removeIngredient} from "../../store/actions/actions";


class BurgerBuilder extends Component {
    state = {
        purchasable: false,
        purchasing: false
    };

    componentDidMount() {
        this.props.orderCompleted();
    }

    isPurchasable = () => {
        const sum = Object.keys(this.props.ingredients)
            .map(igKey => this.props.ingredients[igKey])
            .reduce((sum, el) => sum + el, 0);
        return sum > 0;
    };

    purchaseHandler = () => {
        this.setState({purchasing: true, modalClass: 'open'});
    };

    purchaseCancelHandler = () => {
        this.setState({purchasing: false, modalClass: ''});
    };
    purchaseContinueHandler = () => {
        this.props.history.push({
            pathname: '/checkout'
        });
    };

    render() {
        const disableInfo = {...this.props.ingredients};

        for (let key in disableInfo) {
            disableInfo[key] = (disableInfo[key] <= 0);
        }

        return (
            <Fragment>
                <Burger ingredients={this.props.ingredients}/>
                <BuildControls
                    purchasable={this.isPurchasable()}
                    disabled={disableInfo}
                    totalPrice={this.props.totalPrice}
                    added={this.props.onAddedIngredient}
                    removed={this.props.onRemovedIngredient}
                    ordered={this.purchaseHandler}
                />
                <Modal
                    show={this.state.purchasing}
                    closed={this.purchaseCancelHandler}
                >
                    <OrderSummary
                        continue={this.purchaseContinueHandler}
                        cancel={this.purchaseCancelHandler}
                        ingredients={this.props.ingredients}
                        totalPrice={this.props.totalPrice}
                    />
                </Modal>
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        ingredients: state.burger.ingredients,
        totalPrice: state.burger.totalPrice
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddedIngredient: igName => dispatch(addIngredient(igName)),
        onRemovedIngredient: igName => dispatch(removeIngredient(igName)),
        orderCompleted: () => dispatch(orderCompleted())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);
