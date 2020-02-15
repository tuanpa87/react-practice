import React, { Component } from 'react';




class Reset extends Component {
    onResetDefault= () => {
        this.props.onSettingDefault(true);
    }

    render() {
        return (
            <div id="content-box" className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <button className="btn btn-primary" onClick={this.onResetDefault}>Reset</button>
            </div>
        );
    }
}

export default Reset;
