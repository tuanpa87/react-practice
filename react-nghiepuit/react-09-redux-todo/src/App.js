import React, { Component } from 'react';
import './App.css';
import TaskForm from './components/TaskForm'
import TaskControl from './components/TaskControl'
import TaskList from './components/TaskList';
import { connect } from 'react-redux';
import * as actions from './actions' 

class App extends Component {
  //chức năng thêm hoặc sửa
  onToogleForm = () => {
    var {itemEditing} = this.props;
    if (itemEditing && itemEditing.id) {
      this.props.onOpenForm();
    } else {
      this.props.onToogleForm();
    }
    this.props.onClearTask({
      id: '',
      name: '',
      status: false
    })
  }

  render() {
    var {isDisplayForm} = this.props
 
    return (
      <div className="App">
        <div className="container">
          <div className="text-center">
            <h1>Quản Lý Công Việc</h1>
            <hr />
          </div>

          <div className="row">
            {/* Form */}
            <div className={isDisplayForm ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : ''}>
              <TaskForm />
            </div>
            <div className={isDisplayForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
              <button
                type="button"
                className="btn btn-primary"
                onClick={this.onToogleForm}
              >
                <span className="fa fa-plus mr-5"></span>Thêm Công Việc
              </button>

              {/* Search & Sort */}
              <TaskControl />

              <div className="row mt-15">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  {/* List */}
                  <TaskList />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => { //chuyen state tu store chung thanh props 
  return {
     isDisplayForm: state.isDisplayForm,
     itemEditing: state.itemEditing
   }
} 

const mapDispatchToProps = (dispatch, props) => { //tao dispatch tu action => reducer se phan tich de chuyen state cu thanh state moi trong store
  return {
    onToogleForm: () => {
      dispatch(actions.toggleForm())
    },
    onClearTask: (task) => {
      dispatch(actions.editTask(task))
    },
    onOpenForm: () => {
      dispatch(actions.openForm())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);