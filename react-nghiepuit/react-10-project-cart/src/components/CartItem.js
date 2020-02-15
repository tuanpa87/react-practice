import React, { Component } from 'react';
import * as Message from './../constants/Messages';

class CartItem extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         quantity: 1
    //     }
    // }

    render() {
        var {item} = this.props;
        //console.log(item);
        var {quantity} = item
        console.log(quantity)
        return (
            <tr>
                <th scope="row">
                    <img src= {item.product.image}
                        alt="" className="img-fluid z-depth-0" />
                </th>
                <td>
                    <h5>
                        <strong>{item.product.name}</strong>
                    </h5>
                </td>
                <td>{item.product.price}$</td>
                <td className="center-on-small-only">
                    <span className="qty"> {quantity} </span>
                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label 
                            onClick = {() => this.onUpdateQuantity(item.product, item.quantity - 1)}
                            className="btn btn-sm btn-primary
                            btn-rounded waves-effect waves-light">
                            <a>—</a>
                        </label>
                        <label 
                            onClick = {() => this.onUpdateQuantity(item.product, item.quantity + 1)}
                            className="btn btn-sm btn-primary
                            btn-rounded waves-effect waves-light">
                            <a>+</a>
                        </label>
                    </div>
                </td>
                <td>{this.showSubTotal(item.product.price, item.quantity)}$</td>
                <td>
                    <button 
                        type="button" 
                        className="btn btn-sm btn-primary waves-effect waves-light" 
                        data-toggle="tooltip" 
                        ata-placement="top"
                        title="" 
                        data-original-title="Remove item"
                        onClick={() => this.onDelete(item.product)}
                    >
                        X
                    </button>
                </td>
            </tr>
        );
    }

    showSubTotal = (price, quantity) => price * quantity

    onDelete = (product) => {
        var {onDeleteProductInCart, onChangeMessage} = this.props
        console.log(product);
        onDeleteProductInCart(product);
        onChangeMessage(Message.MSG_DETELE_PRODUCT_IN_CART_SUCCESS);
    }

    onUpdateQuantity = (product, updatedQuantity) => {
        if (updatedQuantity > 0) {
            var {onUpdateProductInCart, onChangeMessage} = this.props;
            // dung state chung luon
            // this.setState({ 
            //     quantity: updatedQuantity
            // })    
           onUpdateProductInCart(product, updatedQuantity)
           onChangeMessage(Message.MSG_UPDATE_CART_SUCCESS)
        }
    }
}

export default CartItem;
