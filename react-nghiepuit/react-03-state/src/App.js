import React, { Component } from 'react';
import './App.css';
import Product from './components/Product'

class App extends Component {

	//state la trang thai cua components
	constructor(props) {
		super(props);
		this.state = {
			products : [
				{
					id: 1,
					image: "https://cellphones.com.vn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/x/-/x-gray_8.jpg",
					name: "Apple Iphone X",
					price: "20.000.000",
					status: true
				},
				{
					id: 2,
					image: "https://cellphones.com.vn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/n/o/note-8-black_2.jpg",
					name: "Samsung note 8",
					price: "25.000.000",
					status: true
				},
				{
					id: 3,
					image: "https://cellphones.com.vn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/x/-/x-gray_8.jpg",
					name: "Apple Iphone X",
					price: "20.000.000",
					status: false
				},
				{
					id: 4,
					image: "https://cellphones.com.vn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/x/-/x-gray_8.jpg",
					name: "Apple Iphone X",
					price: "20.000.000",
					status: false
				},
				{
					id: 4,
					image: "https://cellphones.com.vn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/x/z/xz1-black.jpg",
					name: "Sony Xperia XZ1 ",
					price: "15.000.000",
					status: true
				}
			],
			isActive: true
		};
		// this.onSetState = this.onSetState.bind(this)
	}

	onSetState = () => {
		(this.state.isActive) ? this.setState({ isActive: false }) : this.setState ({ isActive: true })
		
		
		
	}

	render() {
		let elements; 
		if (!this.state.isActive) {
			elements ='';
		} else {
			elements = this.state.products.map(
				(product, index) => {
					let result = '';
					if (product.status) {
						  result =(
						<tr key= {index}>
							<td>{index}</td>
							<td>{product.name}</td>
							<td>{product.price}</td>
						</tr>
						)
					}
					return result
				}
			)
		}
		
		return (
			<div className="App">
				<nav className="navbar navbar-inverse">
					<div className="container-fluid">
						<a className="navbar-brand">My React Apps - States</a>
					</div>
				</nav>

				<div className="container">
					{/* refs */}
					<div className="row">
						<div className="col-lg-12">
							<div className="panel panel-danger">
								<div className="panel-heading">
									<h3 className="panel-title">Thêm sản phẩm</h3>
								</div>
								<div className="panel-body">
									<div className="form-group">
										<label htmlFor="">Tên sản phẩm</label>
										<input type="text" className="form-control" ref="name"/>
									</div>
									<button
										className="btn btn-primary"
										onClick={this.onAddProduct}
									>
										Lưu
									</button>
								</div>
							</div>
						</div>
					</div>
				
					{/* States */}
					<div className="row">
						<div className="col-lg-12"> 
							<table className="table table-hover table-bodered">
								<thead>
									<th>STT</th>
									<th>Tên sản phẩm</th>
									<th>Giá</th>
								</thead>
								<tbody>
									{elements}
								</tbody>
							</table>

							<button className="btn btn-danger" onClick={this.onSetState} >
								Active: {this.state.isActive === true ? 'true' : 'false'}
							</button>
						</div>
					</div>	

				</div>
			</div>
		);
	}
}

export default App;
