import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ColorPicker from './components/ColorPicker'
import SizeSetting from './components/SizeSetting'
import Reset from './components/Reset'
import Result from './components/Result'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color : 'red',
      fontSize: 12
    }
    this.onSetColor = this.onSetColor.bind(this)
    this.onChangeSize = this.onChangeSize.bind(this)
    this.onSettingDefault = this.onSettingDefault.bind(this)
  }

  //voi state thi khong truyen duoc qua lai giua cac function
  
  onSetColor(params) {
    //console.log(params)
    this.setState( {
      color: params
    })
  }

  onChangeSize(value) {
    console.log(value)
    //8 <= fontSze <= 36
    if (this.state.fontSize + value >= 8 && this.state.fontSize + value <= 36) {
      this.setState({
        fontSize: this.state.fontSize + value
      })  
    }
  }

  onSettingDefault(value) {
    console.log(value)
    if(value) {
      this.setState({
        color : 'red',
        fontSize: 12
      })
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Review app: Change font setting</h1>
        </header>

        <div className="container mt-50">
          {/* //truyen vao props de chuyen sang components con*/}
          <ColorPicker color={this.state.color} onReceiveColor={this.onSetColor}/> 
          {/* //truyen vao props de chuyen sang components con*/}
          <SizeSetting 
          fontSize={this.state.fontSize}
          onChangeSize={this.onChangeSize}
          />
          <Reset  onSettingDefault = {this.onSettingDefault} />
          <Result color ={this.state.color} fontSize={this.state.fontSize}/>
        </div>
      </div>
    );
  }
}

export default App;
