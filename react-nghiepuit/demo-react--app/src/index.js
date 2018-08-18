import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



//---------------JSX--------------------

// const user = {
//     name: 'Tuan',
//     email: 'tuan@mail.com'
// };

// const element = (
//     <div className="hello">
//         <h1> Hello world </h1>
//         <h2> my name is {user.name} and my email is {user.email} </h2>
//     </div>
// )


//var numbers = [1,2,3,4]
// var doubleNumbers = numbers.map(function(each) {
//     return each*2 + ", "
// })


//var doubleNumbers = numbers.map((each) => each*2 + "; ")


// ReactDOM.render(//element,
//     //<h1> doubleNumbers is: {doubleNumbers}</h1>,
//     document.getElementById('root'));



//---------------Render element--------------------
/*
function updateTimer() {
    const timeElement = (
        <div> 
            <h1> Timer example 22 </h1>
            <h2> Current time: {new Date().toLocaleTimeString()}  </h2>
        </div>
    )

    ReactDOM.render(
        timeElement,
        document.getElementById('root'));
}

setInterval(updateTimer,1000)

*/


//---------------Components--------------------


// //Methol 1:
// function UserInfo(props) {
//     return (
//             <div>
//                 <p> Name: {props.name }</p>
//                 <p>Emaul: {props.email }</p>
//             </div>
//     );
// }

// //Methol 2:
// class UserInfo extends React.Component {
// 	render() {
// 		return (
// 			<div>
// 				<div className="UserDetail">
// 					<p> Name: {this.props.name}</p>
// 					<p> Email: {this.props.email}</p>
// 				</div>
// 				<div className="OtherInfo">
// 					<p>Other infomation: {this.props.otherInfo} </p>
// 				</div>
// 			</div>
// 		);
// 	}
// }


// // tach ra nhieu components
// class UserDetail extends React.Component {
// 	render() {
// 		return (
// 			<div className="UserDetail">
// 				<p> Name: {this.props.name}</p>
// 				<p> Email: {this.props.email}</p>
// 			</div>
// 		)
// 	}
// }

// class OtherInfor extends React.Component {
// 	render() {
// 		return (
// 			<div className="OtherInfo">
// 				<p>Other infomation: {this.props.otherInfo} </p>
// 			</div>
// 		)
// 	}
// }

// //sau do gop vao nhe
// class UserInfo extends React.Component {
// 	render() {
// 		return (
// 			<div>
// 				<UserDetail	name={this.props.name} email={this.props.email} />
// 				<OtherInfor otherInfo={this.props.otherInfo} />
// 			</div>
// 		)
// 	}
// }

// const element = <UserInfo name="So 3" email="m3@mail.com" otherInfo="update later!!!" />

// ReactDOM.render(
// 	element,
// 	document.getElementById('root'));



//---------------State và Lifecycle--------------------

// class Counter extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {seconds: 0}
// 	}

// 	incrementCounter() {
// 		this.setState (
// 			(prevState, props) => ({
// 				seconds: prevState.seconds + 1
// 			})
// 		);
// 	}

// 	componentDidMount () {
// 		this.timerID = setInterval(
// 			() => this.incrementCounter(),
// 			1000
// 		);
// 	}

// 	componentWillMount() {
// 		clearInterval(this.timerID);
// 	}

// 	render() {
// 		return (
// 			<div>
// 				<h1> This is a counting machine</h1>
// 				<h2> Seconds: {this.state.seconds} s</h2>
// 			</div>
// 		)
// 	}
// }


// ReactDOM.render(
// 	<Counter />,
// 	document.getElementById('root'));


//---------------Event-------------------

// class ToogleButton extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {isOn: true}

// 	}

// 	buttonClick = () => {
// 		this.setState(PrevState => (
// 			{
// 				isOn: !PrevState.isOn
// 			}
// 		))
// 	}

// 	render() {
// 		return (
// 			<button className="ToogleButton" onClick={this.buttonClick}>
// 				This is toogle button 
// 				{this.state.isOn ? " ON" : " OFF"}
// 			</button>
// 		)
// 	}
// }

// 	ReactDOM.render(
// 			<ToogleButton />,
// 			document.getElementById('root'));

//---------------Conditional Render-------------------
// class LoginComponent extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = { isLoggedIn: false };
// 	}

// 	handleLogOut = () => {
// 		this.setState({ isLoggedIn: false });
// 	}

// 	handleLogIn = () => {
// 		this.setState({ isLoggedIn: true });
// 	}

// 	render() {
// 		let myButton = null;
// 		let title = null;
// 		if (this.state.isLoggedIn) {
// 			myButton = <button onClick={this.handleLogOut}>LogOut</button>
// 		} else {
// 			myButton = <button onClick={this.handleLogIn}>LogIn </button>
// 		}
// 		title = this.state.isLoggedIn ? <h1>Logged In</h1> : <h1> Logged Out</h1>

// 		return (
// 			<div>
// 				{title}
// 				{myButton}
// 			</div>
// 		);
// 	}
// }

// ReactDOM.render(
// 	<LoginComponent />,
// 	document.getElementById('root'));


// class MailComponent extends React.Component {
// 	constructor(props) {
// 		super(props);
// 	}

// 	render() {
// 		return (
// 			<div>
// 				<h1>Mail stactitis </h1>
// 				{this.props.newMessager.length > 0 &&  //khi phan ben phai tra ve false thi se ko hien nua
// 					<h2>
// 						You have {this.props.newMessager.length} new messages
// 					</h2>
// 				}
// 			</div>
// 		); 
//  	}
// }

// ReactDOM.render(
// 	<MailComponent newMessager={['how are you', 'are you online?','zzzz']}/>,
// 	document.getElementById('root'));

//---------------List and key -------------------


// function ListItem(props) { //component phai viet hoa
// 	return <li> {props.value} </li>
// }

// class AnimalsComponents extends React.Component {
// 	constructor(props) {
// 		super(props)
// 		this.listItems = props.animals.map(
// 			(animal, index) => <ListItem key={animal.id} value={index.toString() + "-" + animal.title} />
// 		)
// 	};

// 	render() {
// 		return (
// 			<ul>
// 				{this.listItems}
// 			</ul>
// 		);
// 	}
// }

// //const animals = ["lion", "cat", "horse", "donkey", "dog"];

// const animals = [
// 	{
// 		id :  "2geh",
// 		name :  "lion",
// 		title : "this is a lion"
// 	},
// 	{
// 		id :  "g44g",
// 		name :  "cat",
// 		title : "this is a cat"
// 	},
// 	{
// 		id : "546geh",
// 		name : "horse",
// 		title :"this is a hourse"
// 	},
// 	{
// 		id : "2grge",
// 		name : "donkey",
// 		title :"this is a donkey"
// 	},
// 	{
// 		id : "54353",
// 		name : "dog",
// 		title :"this is adogn"
// 	},


// ]

// ReactDOM.render(
// 	<AnimalsComponents animals={animals} />,
// 	document.getElementById('root'));


//---------------Form -------------------

// class FormComponent extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {textData: ""} //chi gan state o day
// 	}

// 	handleChange = (event) => {
// 		this.setState({
// 			textData: event.target.value 
// 		})
// 	}

// 	handleSubmit = (event) => {
// 		alert("you submited you name: " + this.state.textData);
// 		event.preventDefault();
// 	}


// 	render() {
// 		return (
// 			<form onSubmit={this.handleSubmit} className="input-form">
// 				<label>
// 					Your Name: 
// 					<input type="text" value={this.state.textData} onChange={this.handleChange}/>
// 				</label>
// 				<input type="submit" value="Submit your name"/>
// 			</form>
// 		);
// 	}
// }

// ReactDOM.render(
// 	<FormComponent />,
// 	document.getElementById('root'));


//---------------Mutiple Input -------------------

// class FormComponent extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = { 
// 			yourName: "" ,
// 			numberOfFriends: 0
// 		} //chi gan state o day
// 	}

// 	handleChange = (event) => {
// 		this.setState ({
// 			[event.target.name] : event.target.value //event.target.name nay la attribute name cua cac the input 
// 		})
// 	}

// 	handleSubmit = (event) => {
// 		alert("you submited data " + this.state.yourName + ", " + this.state.numberOfFriends);
// 		event.preventDefault();
// 	}


// 	render() {
// 		return (
// 			<form onSubmit={this.handleSubmit} className="input-form">
// 				<label>
// 					Your Name:
// 					<input type="text"
// 						name="yourName" 
// 						value={this.state.textData}
// 						onChange={this.handleChange} />
// 				</label>
// 				<br /> <br />
// 				<label>
// 					Number of your friends:
// 					<input type="number"
// 						name="numberOfFriends"
// 						value={this.state.numberOfFriends}
// 						onChange={this.handleChange} />
// 				</label>
// 				<br /> <br />
// 				<input type="submit" value="Submit your name" />
// 			</form>
// 		);
// 	}
// }


// ReactDOM.render(
// 	<FormComponent />,
// 	document.getElementById('root'));

//---------------Composition và Inheritance -------------------

class PaneComponent extends React.Component {
	constructor(props) {
		super(props);

	}


	render() {
		return (
			<div>	
				{this.props.children}
				{this.props.up}
				{this.props.children}
				{this.props.down}
				
			</div>
		)
	}
}

function UpComponents(props) {
	return (
		<div className="red">
			This is RED
		</div>
	);
}

function DownComponents(props) {
	return (
		<div className="blue">
			This is BLUE
		</div>
	);
}


ReactDOM.render(
	<PaneComponent
		up={<UpComponents />}
		down={<DownComponents />} >
	
	<p>This is children part</p>

	</PaneComponent> ,
	document.getElementById('root'));

