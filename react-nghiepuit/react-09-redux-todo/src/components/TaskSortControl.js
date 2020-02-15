import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '.././actions'

class TaskSortControl extends Component {
    constructor(props) {
        super(props);
        this.state = {
            elmStyle: { display: 'none' },
        }
    }

    onDropDown = () => {
        if (this.state.elmStyle.display === 'none') {
            this.setState({
                elmStyle: { display: 'block' }
            })
        } else {
            this.setState({
                elmStyle: { display: 'none' }
            })
        }
    }

    onClick = (sortBy, sortValue) => {
        console.log(sortBy, '&', sortValue)

        this.props.onSort({ //truyen vao dispatch
            by: sortBy,
            value: sortValue
        })

        //an xong phai an menu
        if (this.state.elmStyle.display !== 'none') {
            this.setState({
                elmStyle: { display: 'none' }
            })
        }
    }


    // offDropDown = () => {
    //     this.setState({
    //         elmStyle: {display: 'none'}
    //     })
    // }

    render() {
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="dropdown">
                    <button
                        className="btn btn-primary dropdown-toggle"
                        type="button" id="dropdownMenu1"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="true"
                        onClick={this.onDropDown}
                        //onBlur={this.offDropDown}
                    >
                        Sắp Xếp
                        <span className="fa fa-caret-square-o-down ml-5"></span>
                    </button>
                    <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenu1"
                        style={this.state.elmStyle}
                        // set style in react: style = {element's style object} 
                        // style={{display: 'block', background: 'red'}} 
                    >
                        <li onClick={() => this.onClick('name', 1)} >
                            <a
                                role="button"
                                className={(this.props.sort.by === 'name' && this.props.sort.value === 1) ? 'sort-selected' : ''}
                            >
                                <span className="fa fa-sort-alpha-asc pr-5">
                                    Tên A-Z
                                </span>
                            </a>
                        </li>
                        <li onClick={() => this.onClick('name', -1)} >
                            <a
                                role="button"
                                className={(this.props.sort.by === 'name' && this.props.sort.value === -1) ? 'sort-selected' : ''}
                            >
                                <span className="fa fa-sort-alpha-desc pr-5">
                                    Tên Z-A
                                </span>
                            </a>
                        </li>

                        <li role="separator" className="divider"></li>

                        <li onClick={() => this.onClick('status', 1)} >
                            <a
                                role="button"
                                className={(this.props.sort.by === 'status' && this.props.sort.value === 1) ? 'sort-selected' : ''}

                            >
                                Trạng Thái Kích Hoạt
                            </a>
                        </li>
                        <li onClick={() => this.onClick('status', -1)} >
                            <a
                                role="button"
                                className={(this.props.sort.by === 'status' && this.props.sort.value === -1) ? 'sort-selected' : ''}
                            >
                                Trạng Thái Ẩn
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}


// class TaskSortControl extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             showDropDown: false
//         }
//     }

//     onDropDown = () => {
//         this.setState({
//             showDropDown: !this.state.showDropDown
//         })
//     }

//     onClick = (sortBy, sortValue) => {
//         console.log(sortBy, '&', sortValue)

//         this.props.onSort({ //truyen vao dispatch
//             by: sortBy,
//             value: sortValue
//         })

//         //an xong phai an menu

//         this.setState({
//             showDropDown: false
//         })

//     }


//     offDropDown = (e) => {
//         console.log(e.target)
//         this.setState({
//             showDropDown: false
//         })
//     }

//     render() {
//         var { showDropDown } = this.state
//         return (
//             <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
//                 <div className="dropdown">
//                     <button
//                         className="btn btn-primary dropdown-toggle"
//                         type="button" id="dropdownMenu1"
//                         data-toggle="dropdown"
//                         aria-haspopup="true"
//                         aria-expanded="true"
//                         onClick={this.onDropDown}
//                         //onBlur ={this.offDropDown}
//                     >
//                         Sắp Xếp
//                         <span className="fa fa-caret-square-o-down ml-5"></span>
//                     </button>
//                     <ul
//                         className={showDropDown ? "dropdown-menu show-menu" : "dropdown-menu"}
//                         aria-labelledby="dropdownMenu1"
//                         /* set style in react: style = {element's style object} */
//                         /* style={{display: 'block', background: 'red'}} */
//                     >
//                         <li onClick={() => this.onClick('name', 1)} >
//                             <a
//                                 role="button"
//                                 className={(this.props.sort.by === 'name' && this.props.sort.value === 1) ? 'sort-selected' : ''}
//                             >
//                                 <span className="fa fa-sort-alpha-asc pr-5">
//                                     Tên A-Z
//                                 </span>
//                             </a>
//                         </li>
//                         <li onClick={() => this.onClick('name', -1)} >
//                             <a
//                                 role="button"
//                                 className={(this.props.sort.by === 'name' && this.props.sort.value === -1) ? 'sort-selected' : ''}
//                             >
//                                 <span className="fa fa-sort-alpha-desc pr-5">
//                                     Tên Z-A
//                                 </span>
//                             </a>
//                         </li>

//                         <li role="separator" className="divider"></li>

//                         <li onClick={() => this.onClick('status', 1)} >
//                             <a
//                                 role="button"
//                                 className={(this.props.sort.by === 'status' && this.props.sort.value === 1) ? 'sort-selected' : ''}
//                             >
//                                 Trạng Thái Kích Hoạt
//                             </a>
//                         </li>
//                         <li onClick={() => this.onClick('status', -1)} >
//                             <a
//                                 role="button"
//                                 className={(this.props.sort.by === 'status' && this.props.sort.value === -1) ? 'sort-selected' : ''}
//                             >
//                                 Trạng Thái Ẩn
//                             </a>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         );
//     }
// }

const mapStateToProps = (state) => { //chuyen state tu store chung thanh props 
    return {
        sort: state.sort
    }
}

const mapDispatchToProps = (dispatch, props) => {  //tao dispatch tu action => reducer se phan tich de chuyen state cu thanh state moi trong store
    return {
        onSort: (sort) => { //sort{by,value}
            dispatch(actions.sortTask(sort))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskSortControl);