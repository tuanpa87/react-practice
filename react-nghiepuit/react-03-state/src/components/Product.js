import React, { Component } from 'react';


class Product extends Component {

	//bat su kien dung arrow function
	// onAddToCard(text) {
	// 	alert(text)
	// }

	//bat  su kien dung constructor

	constructor(props) {
		super(props);
		console.log(props)
		this.onAddToCard = this.onAddToCard.bind(this)
	}

	onAddToCard(text) {
		alert(this.props.name + '-' + this.props.price)
	}

	onAddToCard2 = ()  => {
		alert(this.props.name + '-' + this.props.price)
	}

	render() {
		return (
			<div className="col-lg-4">
				<div className="thumbnail">
					<img src={this.props.image} alt={this.props.name}/>
					<div className="caption">
						<h3>{}</h3>
						<p>{this.props.price}</p>
						<p> 
							{/* truyen tham so vao su kien  dung arrow function */}
							{/* <a href="#" className="btn btn-primary" onClick ={() => this.onAddToCard(this.props.name)} >Mua ngay</a> */}
							
							{/* truyen tham so dung constructor super */}
							<a href="#" className="btn btn-primary" onClick={this.onAddToCard}>Mua Ngay</a>

							{/* truyen tham so vao su kien cach 2 arrow function  */}
							{/* <a href="#" className="btn btn-primary" onClick={this.onAddToCard2}>Mua luon</a> */}
						</p>

						
					</div>
				</div>
			</div>
		);
	}
}

export default Product;
