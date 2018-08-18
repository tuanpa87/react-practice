import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions'

class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = { //state này để lưu trữ giá trị của form 
        }
    }

    //life cycle: compormentWillMount khi tạo components.  
    //life cycle: nhận lại prop itemEditing và set lại state 
    componentWillMount() {
        console.log('componentWillMount: goi duoc 1 lan dau')
        if (this.props.itemEditing && this.props.itemEditing) {
            this.setState({ //set lại state của component này (TaskForm)
                id: this.props.itemEditing.id,
                name: this.props.itemEditing.name,
                status: this.props.itemEditing.status
            })
        }  //sửa cũng qua function onChange -> onSubmit 
        else {
            this.onClear();
        }
    }

    //life cycle: componentWillReceiveProps khi có sự thay đổi props
    //life cycle: thay đổi state khi thêm <=> sửa
    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps:')
        console.log(nextProps) //nextProps: nhận lại prop task = state.taskEditing  khi thay đổi thêm <=> sửa  
        if (nextProps && nextProps.itemEditing) { //khi sửa thì có state.taskEditing tức là cũng có nextProps.task 
            console.log('thêm => sửa')
            this.setState({
                id: nextProps.itemEditing.id,
                name: nextProps.itemEditing.name,
                status: nextProps.itemEditing.status
            })
        } else { //khi thêm thì nextProps.itemEditing = null luôn
            console.log('sửa => thêm')
            this.onClear();
        }
    }

    onExitForm = () => {
        this.props.onCloseForm();
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value
        if (name === 'status') {
            value = target.value === 'true' ? true : false
        };
        this.setState({
            [name]: value //set lại state Form
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        //console.log(this.state)
        this.props.onSaveTask(this.state);
        //Submit xong phai clear va close form
        this.onClear();
        this.onExitForm();
    }

   //xoa gia tri
    onClear = () => {
        console.log('onClear')
        this.setState({
            name: '',
            status: false,
        })
    }

    //chức năng hủy bỏ khi nhập form
    onCancel = () => {  
        this.onClear();
        this.onExitForm();
    }

    render() {
        if (!this.props.isDisplayForm) return null; //props.isDisplayForm được convert bên ngoài component App
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        {this.state.id !== '' ? 'Cập Nhật Công Việc' : 'Thêm Công Việc'}
                        <span
                            className="fa fa-times-circle text-right"
                            onClick={this.onExitForm}
                        ></span>
                    </h3>
                </div>
                <div className="panel-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Tên :</label>
                            <input
                                type="text"
                                className="form-control"
                                required="required"
                                name="name"
                                value={this.state.name}
                                onChange={this.onChange}
                            />
                        </div>
                        <label>Trạng Thái :</label>
                        <select
                            className="form-control"
                            required="required"
                            name="status"
                            value={this.state.status}
                            onChange={this.onChange}
                        >
                            <option value={true}>Kích Hoạt</option>
                            <option value={false}>Ẩn</option>
                        </select>
                        <br />
                        <div className="text-center">
                            <button type="submit" className="btn btn-warning">
                                <span className="fa fa-plus mr-5"></span> Lưu lại
                            </button>&nbsp;
                            <button type="button" className="btn btn-danger" onClick={this.onCancel} >
                                <span className="fa fa-close mr-5"></span> Hủy bỏ
                            </button>
                        </div>
                    </form>
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

const mapDispatchToProps = (dispatch, props) => {  //tao dispatch tu action => reducer se phan tich de chuyen state cu thanh state moi trong store
    return {
        onSaveTask: (task) => { //goi onAddTask thi se chuyen action len reducer de thuc thi thay doi trang thai
            dispatch(actions.saveTask(task))
        },
        onCloseForm: () => {
            dispatch(actions.closeForm())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);