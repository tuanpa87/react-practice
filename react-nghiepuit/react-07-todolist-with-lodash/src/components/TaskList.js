import React, { Component } from 'react';
import TaskItem from './TaskItem';

class TaskList extends Component {

    constructor(props) {
        super(props);
        this.state = { //state để tìm kiếm 
            filterName : '', 
            filterStatus: -1 //all: -1, active: 1, deactive : 0
        }
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.props.onFilter ( //truyen ra ngoai 2 parameter 
            name === 'filterName' ? value : this.state.filterName,  
            name === 'filterStatus' ? value : this.state.filterStatus
        ) 
        this.setState ({
            [name] : value
        })
       
    }

    render() {
        var {tasks} = this.props;
        var { filterName , filterStatus } = this.state;
        var elmTasks = tasks.map((task,index )=> { //tạo các TaslItem con từ props truyền vào  
            return <TaskItem 
                    key={task.id} //truyền key duy nhất
                    index={index} 
                    task={task}
                    onUpdateStatus = {this.props.onUpdateStatus}
                    onDelete = {this.props.onDelete}
                    onUpdate = {this.props.onUpdate}
                    />
         })

        return (
            <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th className="text-center">STT</th>
                        <th className="text-center">Tên</th>
                        <th className="text-center">Trạng Thái</th>
                        <th className="text-center">Hành Động</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td>
                            <input 
                                type="text" 
                                className="form-control" 
                                name= "filterName"
                                value = { filterName }
                                onChange = {this.onChange}
                            />
                        </td>
                        <td>
                            <select 
                                className="form-control"
                                name= "filterStatus"
                                value = { filterStatus }
                                onChange = {this.onChange}
                            >
                                <option value="-1">Tất Cả</option>
                                <option value="0">Ẩn</option>
                                <option value="1">Kích Hoạt</option>
                            </select>
                        </td>
                        <td></td>
                    </tr>
                    {elmTasks}
                </tbody>
            </table>
        );
    }
}

export default TaskList;
