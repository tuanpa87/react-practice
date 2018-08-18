import React, { Component } from 'react';



//xu ly hoan toan bang props
//chi thuc hien cau truc html va css
//ket noi voi container component tuong ung de su dung redux

class Products extends Component {
    render() {
        return (
            <section className="section">
                <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
                <div className="row">
                  {this.props.children}
                </div>
            </section>
        );
    }
}

export default Products;
