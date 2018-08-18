import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as  Message from './../constants/Messages';
import Cart from './../components/Cart'
import CartItem from './../components/CartItem'
import CartResult from './../components/CartResult'
import {actRemoveProductInCart, actChangeMessage, actUpdateProductInCart} from './../actions'

//cac container la trung gian lay du lieu tu store chung
//truyen props vao component tuong ung de su dung redux store

class CartContainer extends Component {
    render() {
        var { cart } = this.props
        //console.log(cart)
        return (
            <Cart>
                {this.showCartItem(cart)}
                {this.showTotalAmount(cart)}
            </Cart>
        );
    }

    showCartItem = (cart) => {
        var {onDeleteProductInCart, onChangeMessage, onUpdateProductInCart} = this.props
        var results = (
            <tr>
                <td>{Message.MSG_CART_EMPTY}</td>
            </tr>
        )

        if (cart.length > 0) {
            results = cart.map((item, index) => {
                return <CartItem 
                    key={index} 
                    item={item} 
                    onDeleteProductInCart = {onDeleteProductInCart}
                    onChangeMessage = {onChangeMessage}
                    onUpdateProductInCart = {onUpdateProductInCart}
                />
            })
            console.log(results)
        }
        return results;
    }

    showTotalAmount = (cart) => {
        var result = null;
        if (cart.length > 0) {
            result = <CartResult cart={cart} />
        }
        return result;
    }
}

CartContainer.propTypes = {
    cart: PropTypes.arrayOf(
        PropTypes.shape({
            product: PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                image: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired,
                inventory: PropTypes.number.isRequired,
                rating: PropTypes.number.isRequired
            }).isRequired,
            quantity: PropTypes.number.isRequired
        })
    ).isRequired,
    onChangeMessage: PropTypes.func.isRequired,
    onDeleteProductInCart: PropTypes.func.isRequired,
    onUpdateProductInCart: PropTypes.func.isRequired
}


const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch,props) => {
    return {
        onDeleteProductInCart: (product) => {
            dispatch(actRemoveProductInCart(product))
        }, 
        onChangeMessage: (message) => {
            dispatch(actChangeMessage(message)) 
        },
        onUpdateProductInCart: (product, quantity) => {
            dispatch(actUpdateProductInCart(product, quantity))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
