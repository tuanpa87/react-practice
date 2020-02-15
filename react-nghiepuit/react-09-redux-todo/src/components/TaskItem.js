import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '.././actions'

class TaskItem extends Component {

    onUpdateStatus = () => {
        this.props.onUpdateStatus(this.props.task.id)
    }

    onDelete = () => {
        console.log(this.props.task.id);
        this.props.onDeleteTask(this.props.task.id)     //~ dispatch (action.deteleTask)
        this.props.onCloseForm();
    }

    onUpdateTask = () => {
        this.props.onOpenForm() //dispatch(action.openForm)
        this.props.onEditTask(this.props.task)
    }

    render() {
        var { task, index } = this.props

        return (
            <tr>
                <td>{index + 1}</td>
                <td>{task.name}</td>
                <td className="text-center">
                    <span
                        className={task.status === true ? 'label label-danger' : 'label label-success'}
                        onClick={this.onUpdateStatus}
                    >{task.status === true ? 'Kích hoạt' : 'Ẩn'}
                    </span>
                </td>
                <td className="text-center">
                    <button
                        type="button"
                        className="btn btn-warning"
                        onClick={this.onUpdateTask}
                    >
                        <span className="fa fa-pencil mr-5"></span>Sửa
                    </button> &nbsp;
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={this.onDelete}
                    >
                        <span className="fa fa-trash mr-5"></span>Xóa
                    </button>
                </td>
            </tr>
        );
    }
}


const mapStateToProps = (state) => { //chuyen state tu store chung thanh props 
    return {
    }
}

const mapDispatchToProps = (dispatch, props) => {  //tao dispatch tu action => reducer se phan tich de chuyen state cu thanh state moi trong store
    return {
        onUpdateStatus: (id) => {
            dispatch(actions.updateStatus(id))
        },
        onDeleteTask: (id) => {
            dispatch(actions.deleteTask(id))
        },
        onCloseForm: () => {
            dispatch(actions.closeForm())
        },
        //Thêm và sửa ko thể cùng dùng 1 state
        // onToogleForm: () => {
        //     dispatch(actions.toggleForm())
        // }
        onOpenForm: () => {
            dispatch(actions.openForm())
        },
        onEditTask: (task) => {
            dispatch(actions.editTask(task))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);