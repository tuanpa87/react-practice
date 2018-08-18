import React, { Component } from 'react';
import './App.css';
import TaskForm from './components/TaskForm'
import TaskControl from './components/TaskControl'
import TaskList from './components/TaskList';
import { findIndex, filter } from 'lodash'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [], //id: unique, name, status
      isDisplayForm: false,
      taskEditing: null, //dùng để xác định task đang sửa
     
      filterName: '',  //dung de filter form TaskList
      filterStatus: -1, 

      keyword: '', //dùng cho chức năng tìm kiếm
      sortBy: 'name',
      sortValue: 1
    }
  }

  //khi refresh lại trang thì truyển dữ liệu từ local storage vào state
  componentWillMount() {
    //console.log(' componentWillMount goi duoc 1 lan thoi nhe')
    if (localStorage && localStorage.getItem('tasks')) {
      var tasks = JSON.parse(localStorage.getItem('tasks'))
      this.setState({
        tasks: tasks
      })
    }
  }

  s4() {
    return Math.floor((1 + Math.random()) * 0x100000).toString(16).substring(1);
  }

  generateID() {
    return this.s4() + this.s4() + this.s4() + '-' + this.s4() + this.s4() + this.s4() + this.s4() + this.s4() + this.s4()
  }

  //chức năng thêm
  onToogleForm = () => {
    if (this.state.isDisplayForm && this.state.taskEditing !== null) {
      //khi dang mo form sửa
      this.setState({
        isDisplayForm: true,
        taskEditing: null
      })
    } else {
      //mac dinh
      this.setState({
        isDisplayForm: !this.state.isDisplayForm,
        taskEditing: null
      })
    }
  }

  onCloseForm = () => {
    //console.log('onCloseForm')
    this.setState({
      isDisplayForm: false
    })
  }

  onShowForm = () => {
    this.setState({
      isDisplayForm: true
    })
  }

  //submit task khi thêm hoặc sửa
  //truyền vào state của data = state của component TaskForm 
  onSubmit = (data) => {
    console.log(data)
    var { tasks } = this.state; //tasks =  this.state.tasks
    if (data.id === '') {
      //Thêm vào data
      data.id = this.generateID();
      tasks.push(data);
    } else {
      //Edit task: thay lại giá trị task =  data
      var index = this.findIndex(data.id)
      tasks[index] = data;
    }

    //xong rồi phải set lại state của App
    this.setState({
      tasks: tasks,
      taskEditing: null
    })
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }


  //chức năng cập nhật trạng thái
  onUpdateStatus = (id) => {
    var { tasks } = this.state;
    console.log(id);
    //var index = this.findIndex(id)
    var index = findIndex(tasks, (task) => {
      return task.id === id;
    })
    console.log(index);
    if (index !== -1) {
      tasks[index].status = !tasks[index].status
      this.setState({
        tasks: tasks,
      })
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  //chức năng xóa
  onDelete = (id) => {
    var { tasks } = this.state;
    var index = findIndex(tasks, (task) => {
      return task.id === id;
    })
    console.log(index);
    if (index !== -1) {
      tasks.splice(index, 1 ); 
      this.setState({
        tasks: tasks
      })
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
    this.onCloseForm();
  }

  //chức năng sửa task
  onUpdate = (id) => {
    var { tasks } = this.state;
    var index = findIndex(tasks, (task) => {
      return task.id === id;
    })
    console.log(index);
    var taskEditing = tasks[index]
    //console.log(taskEditing)
    if (index !== -1) {
      this.setState({
        taskEditing: taskEditing 
      });
      //console.log(this.state.taskEditing) 
      //log tren se log lai state cu chua duoc update 
    }
    this.onShowForm();
  }

  onFilter = (filterName, filterStatus) => {
    //console.log(filterName, '-' , filterStatus , typeof filterStatus)
    filterStatus = parseInt(filterStatus, 10)
    //console.log(typeof filterStatus)
    this.setState ({
      filterName: filterName.toLowerCase(),
      filterStatus: filterStatus
    })
  }

  //chức năng search
  onSearch = (keyword) => {
    console.log(keyword)
    this.setState({
      keyword: keyword.toLowerCase()
    })
  }

  //chuc nang sap xep
  onSort = (sortBy, sortValue) => {
    console.log(sortBy, sortValue)
    this.setState({
      sortBy: sortBy,
      sortValue: sortValue
    })
  }


  render() {
    var { tasks, isDisplayForm, taskEditing } = this.state; // ~ var tasks = this.state.tasks
    var {filterName, filterStatus }  = this.state; 
    //console.log(filter)
    var { keyword } = this.state; 
    var {sortBy, sortValue} = this.state



      //!x will return true for every "falsy" value (empty string, 0, null, false, undefined, NaN) 
      if(filterName) { //kiểm tra khác (empty string, 0, null, false, undefined, NaN) 
        //using lodash filter methol 
        tasks = filter(tasks, (task) => { //gắn lại task
          return task.name.toLowerCase().indexOf(filterName) !== -1
        }) 
      }

        //filter theo status 
          //using lodash filter methol 
      if (filterStatus !== -1) {
        tasks = filter(tasks , (task) => {
          return task.status === (filterStatus === 1 ? true : false) 
            // chuyển lại giá trị 0 1 về true false cho filterStatus
        }) 
      }


    if (sortBy === 'name') {
      tasks.sort((a, b) => {
        if (a.name.toLowerCase() > b.name.toLowerCase()) return sortValue;  // cai nao return ve 1 thi thuc hien cai do
        else if (a.name.toLowerCase() < b.name.toLowerCase()) return -sortValue //sortValue = 1 or -1
        else return 0
      })
    } else {
      tasks.sort((a, b) => {
        if (a.status > b.status) return -sortValue;  
        else if (a.status  < b.status ) return sortValue 
        else return 0
      })
    }


    //chuc nang tim kiem using lodash
    tasks = filter(tasks, (task) => {
      return task.name.toLowerCase().indexOf(keyword) !== -1
    })


    var elmTaskForm = (isDisplayForm) ? <TaskForm 
                                        onCloseForm={this.onCloseForm} 
                                        onSubmit={this.onSubmit} //truyen vao prop onSubmit de goi ben trong TaskForm, moi lan goi props nay se chay function o tren
                                        task={taskEditing}/>  //truyền prop này để sửa task 
                                      : ''
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
              {elmTaskForm}
            </div>
            <div className={isDisplayForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
              <button
                type="button"
                className="btn btn-primary"
                onClick={this.onToogleForm}
              >
                <span className="fa fa-plus mr-5"></span>Thêm Công Việc
              </button>
              {/* <button
                type="button"
                className="ml-5 btn btn-danger"
                onClick={this.onGenarateData}>
                Generate Data
              </button> */}

              {/* Search & Sort */}
              <TaskControl 
                onSearch={this.onSearch} 
                onSort={this.onSort}
                sortBy= {sortBy}
                sortValue = {sortValue}
              />

              <div className="row mt-15">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  {/* List */}
                  <TaskList 
                    tasks={tasks}  //dùng props truyền state vào component tasklist
                    onUpdateStatus={this.onUpdateStatus} 
                    onDelete = {this.onDelete}
                    onUpdate = {this.onUpdate}
                    onFilter = {this.onFilter}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
