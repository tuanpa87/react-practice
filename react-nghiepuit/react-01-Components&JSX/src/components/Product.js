import React, { Component } from 'react';

class Product extends Component {

    showInfoProduct(product) {
        if (product.status) {
            return (
                <h3>
                    ID: {product.id} <br />
                    name: {product.name} <br />
                    price: {product.price} <br />
                    Status: {product.status ? 'Active' : 'Pending'}
                </h3>
            )
        }
    }

    render() { //hien thi giao dien cho nguoi dung
        var a = 5;
        var b = 7;
        var product = {
            id: 1,
            name: "ABC",
            price: 1000000,
            status: true
        }

        var users = [
            {
                id: 1,
                name: "John",
                age: 18
            },
            {
                id: 2,
                name: "Chris",
                age: 40
            },
            {
                id: 3,
                name: "Jane",
                age: 25
            }
        ]

        var elements = users.map((user, index) => {
            return (
                <div key= {user.id} >
                    <h2>Name: {user.name}</h2>
                    <p>Age: {user.age}</p>
                </div>
            )
        })
        return ( //JSX
            <div>
                <h1>Product</h1>

                <div className="ml-30">
                    <h3>
                        a : {a} <br />
                        b : {b} <br />
                        a + b = {a + b}
                    </h3>

                    {/* Methol 1 */}
                    {/* <h3>
                        ID: {product.id} <br/>
                        name: {product.name} <br/>
                        price: {product.price} <br/>
                        Status: {product.status ? 'Active' : 'Pending'}
                    </h3> */}

                    {/* Methol 2 with function */}

                    {this.showInfoProduct(product)}
                    <br />
                    <hr />
                    {elements}
                </div>
            </div>
        );
    }
}

export default Product;