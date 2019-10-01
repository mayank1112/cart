import React from 'react';
import { connect } from 'react-redux';
import addProducts from "../actions/addProducts";
import clearProducts from "../actions/clearProducts";

class Cart extends React.Component {
    addToCart() {
        this.props.addToCart("1 x jacket");
    }
    clearCart() {
        this.props.clearCart();
    }
    componentWillReceiveProps(nextProps, nextContext) {
    }
    componentDidMount() {
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return true;
    }
    componentWillUpdate(nextProps, nextState, nextContext) {
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
    }
    componentWillUnmount() {
    }


    render() {
        return (
            <React.Fragment>
                    <div><a onClick={this.addToCart.bind(this)}>Add to cart</a></div>
                    <div><a onClick={this.clearCart.bind(this)}>Clear</a></div>
                    <div>
                        {
                            this.props.cart.map(product => <div>+ {product}</div>)
                        }
                    </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => ({ cart: state });

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: product => dispatch(addProducts(product)),
        clearCart: () => dispatch(clearProducts()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
