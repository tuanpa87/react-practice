import React, { Component } from 'react';
import TaskSortControl from './TaskSortControl'
import TaskSearchControl from './TaskSearchControl'

class TaskControl extends Component {
    render() {
        return (
            <div className="row mt-15">
                {/* Search */}
                <TaskSearchControl onSearch = {this.props.onSearch} />
                {/* Sort */}
                <TaskSortControl onSort = {this.props.onSort} sortBy ={this.props.sortBy} sortValue ={this.props.sortValue} />
            </div>
        );
    }
}

export default TaskControl;
