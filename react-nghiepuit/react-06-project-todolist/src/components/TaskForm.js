import React, { Component } from 'react';

class TaskForm extends Component {

    constructor(props) {
        super(props);
        this.state = { //state này để lưu trữ giá trị của form 
            id: '',
            name: '',
            status: false,
        }
    }

    //life cycle: nhận lại prop task = state.taskEditing từ ngoài component app
    componentWillMount() {
        console.log('componentWillMount: goi duoc 1 lan dau')
        if (this.props.task) {
            this.setState({ //set lại state của component này (TaskForm)
                id: this.props.task.id,
                name: this.props.task.name,
                status: this.props.task.status
            })
        }  //sửa cũng qua function onChange -> onSubmit 
    }

    //life cycle: thay đổi state khi thêm <=> sửa
    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps:')
        console.log(nextProps) //nextProps: nhận lại prop task = state.taskEditing  khi thay đổi thêm <=> sửa  
        if (nextProps && nextProps.task) { //khi sửa thì có state.taskEditing tức là cũng có nextProps.task 
            console.log('thêm => sửa')
            this.setState({
                id: nextProps.task.id,
                name: nextProps.task.name,
                status: nextProps.task.status
            })
        } else if (!nextProps.task) { //khi thêm thì state.taskEditing = null tức là nextProps.task = null luôn
            console.log('sửa => thêm')
            this.setState({
                id: '',
                name: '',
                status: false,
            })
        }
    }

    onCloseForm = () => {
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

    onSubmit = (e) => { //khi an submit o form thi chay function nay
        e.preventDefault();
        console.log(this.state)
        this.props.onSubmit(this.state) //goi lai props onSubmit da truyen vao o ben ngoai
        //va chay function o ben ngoai app.js (truyền vào giá trị của state lưu giá trị form ở trên)

        //Submit xong phai clear va close form
        this.onClear();
        this.onCloseForm();
    }

    //chức năng hủy bỏ khi nhập form
    onClear = () => {
        this.setState({
            name: '',
            status: false,
        })
    }

    render() {
        var { id } = this.state
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        {id !== '' ? 'Cập Nhật Công Việc' : 'Thêm Công Việc'}
                        <span
                            className="fa fa-times-circle text-right"
                            onClick={this.onCloseForm}
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
                            <button type="button" className="btn btn-danger" onClick={this.onClear} >
                                <span className="fa fa-close mr-5"></span> Hủy bỏ
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default TaskForm;
