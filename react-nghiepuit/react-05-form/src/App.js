import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        txtUsername: 'Họ và tên',
        txtPassword:'',
        txtDesc: 'Mô tả của bạn',
        sltGender: 1,
        rdLang: 'vi',
        chkbStatus: true
      }
      this.onHandleChange  = this.onHandleChange.bind(this)
      this.onHandleSubmit =  this.onHandleSubmit.bind(this)
    }

  onHandleChange (event) {
    //console.log(event.target.value)
    // this.setState({
    //   username: event.target.value
    // })
    var target = event.target;
    var name = target.name; //ten name can phai trung voi ten state
    // var value = target.value;
    //them truong hop dac biet cua checkbox
    var value = target.type === 'checked' ? target.checked : target.value
    this.setState({ 
      [name] : value //luu mutil input
    })
  }

  onHandleSubmit (event) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <div className="container mt-30">
          <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title">Form with React</h3>
              </div>
              <div className="panel-body">
                <form onSubmit={this.onHandleSubmit} >
                  
                  <div className="form-group">
                    <label>Username</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    name="txtUsername" 
                    onChange={this.onHandleChange} 
                    value={this.state.txtUsername}
                    />
                       {/* value di kem voi onchange */}
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input 
                    type="password" 
                    className="form-control" 
                    name="txtPassword" 
                    onChange={this.onHandleChange}
                    value={this.state.txtPassword}
                    />
                  </div>

                  <div className="form-group">
                    <label>Mô tả</label>
                    <textarea 
                    type="text" 
                    rows="3"
                    className="form-control" 
                    name="txtDesc" 
                    onChange={this.onHandleChange}
                    value={this.state.Desc}
                    ></textarea>
                  </div>

                  <div className="form-group">
                    <label>Giới tính</label>
                    <select 
                    className="form-control" 
                    name="sltGender" 
                    value={this.state.sltGender}
                    onChange={this.onHandleChange}>
                      <option value={0} >Nữ</option>
                      <option value={1} >Nam</option>
                    </select>
                  </div>
                  <label> Ngôn ngữ </label>
                  <div className="radio"> 
                    <label>
                      <input 
                        type="radio" 
                        name="rdLang" 
                        value="en"
                        onChange={this.onHandleChange}
                        checked={this.state.rdLang === "en"}
                      />               
                      Tiếng Anh
                    </label> <br/>
                    <label>
                      <input 
                        type="radio" 
                        name="rdLang" 
                        value="vi"
                        onChange={this.onHandleChange}
                        checked={this.state.rdLang === "vi"}
                      />               
                      Tiếng Việt
                    </label>   

                    <div className="checkbox">
                      <label>
                        <input 
                          type="checkbox"
                          name="chkbStatus" 
                          value={true}
                          onChange={this.onHandleChange}
                          checked={this.state.chkbStatus === true}
                        />
                        Trạng thái
                      </label>
                    </div>                   
                   
                  </div>


                  <button type="submit" className="btn btn-primary">Lưu lại</button> &nbsp;
                  <button type="reset" className="btn btn-default">Xóa </button>
                </form>
              </div>
            </div>
          </div>
        </div>


      </div>
    );
  }
}

export default App;
