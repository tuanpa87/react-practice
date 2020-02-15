import React, { Component } from 'react';
import {connect} from 'react-redux';
import Products from './../components/Products'
import Product from './../components/Product'
import PropTypes from 'prop-types';
import {actAddToCart, actChangeMessage} from './../actions'

//cac container la trung gian lay du lieu tu store chung
//truyen props vao component tuong ung de su dung redux store

class ProductsContainer extends Component {
    render() {
        var {products} = this.props
      
        return (
            <Products>
                {this.showProducts(products)}
            </Products>
        );
    }

    showProducts(products) {
        var results = null;
        var {onAddToCart, onChangeMessage} = this.props
        if (products.length > 0) {
            results = products.map((product, index) => {
                return <Product 
                    key = {index} 
                    product = {product}
                    onAddToCart = {onAddToCart}
                    onChangeMessage = {onChangeMessage}
                />
            })
            //console.log(results)
        }
        return results
    }
}

ProductsContainer.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
        })
    ).isRequired,
    onChangeMessage: PropTypes.func.isRequired,
    onAddToCart: PropTypes.func.isRequired
}


const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: (product) => {
             dispatch(actAddToCart(product, 1)) 
        },

        onChangeMessage: (message) => {
            dispatch(actChangeMessage(message)) 
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
