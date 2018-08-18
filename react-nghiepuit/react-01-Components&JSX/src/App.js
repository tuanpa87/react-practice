import React, { Component } from 'react';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import './App.css';
import Header from './components/Header'
import Product from './components/Product'


class App extends Component {
	render() { //hien thi giao dien cho nguoi dung
		return ( //JSX
			<div>
				<h1>App Components</h1>
				<Header /> 	{/* khong co tag dong nen viet the nay cho do nham */}
				<Product />  
			</div>
			
		);
	}
}

export default App;
