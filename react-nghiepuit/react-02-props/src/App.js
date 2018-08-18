import React, { Component } from 'react';
import './App.css';
import Product from './components/Product'

class App extends Component {

	onClick() {  //dua ra khoi render
		console.log('day la App components')
	}

	//tu khoa ref
	onAddProduct = () => {
		console.log(this.refs.name.value)
	}


	//state la trang thai cua components


	render() {
		{/* vong lap de hien thi san pham */}
		var products = [ 	
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
		]

		let elements = products.map(
			(products, index) => {
				if (products.status) {
					return <Product
						key={products.id} //dung index cung duoc
						name={products.name}
						image={products.image}
						price={products.price}
					/>
				}


			}
		)

		return (
			<div className="App">
				<nav className="navbar navbar-inverse">
					<div className="container-fluid">
						<a className="navbar-brand">My React Apps</a>
					</div>
				</nav>

				<div className="container">
				
					<div className="row">
						<div className="col-lg-12">
							<Product
								image="https://cellphones.com.vn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/x/-/x-gray_8.jpg"
								name="Apple Iphone X"
								price="20.000.000"
							/>
							<Product
								image="https://cellphones.com.vn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/n/o/note-8-black_2.jpg"
								name="Samsung Galaxy s8"
								price="22.000.000"
							/>


						{/* vong lap de hien thi san pham */}
							{elements} 
						</div>
					</div>

					<div className="col-lg-12"> 	{/* bat su kien  ko truyen tham so*/}
						<button type="button" className="btn btn-danger" onClick={this.onClick}> 
							Click Me!
						</button>
					</div>	

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
					{/* xem bai tiep di */}
					<div className="row">
						<div className="col-lg-12"> 
							<table className="table table-hover table-bodered">
								<thead>
									<th>STT</th>
									<th>Tên sản phẩm</th>
									<th>Giá</th>
								</thead>
								<tbody>
									<tr>
										<td>1</td>
										<td>Iphone X</td>
										<td>20.000.000 VNĐ</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>	

				</div>
			</div>
		);
	}
}

export default App;
