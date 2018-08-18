import React, { Component } from 'react';

class SizeSetting extends Component {


    changeSize (value) {
        console.log(value);
        this.props.onChangeSize(value)
    }

    render() {
        return (
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <div className="panel panel-warning">
                    <div className="panel-heading">
                        <h3 className="panel-title">Size: {this.props.fontSize}px</h3>
                    </div>
                    <div className="panel-body">
                        <button className="btn btn-success" onClick={ ()=> this.changeSize(-2) } >Giảm</button> &nbsp;
                        <button className="btn btn-success" onClick={ ()=> this.changeSize(+2) } >Tăng</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default SizeSetting;
