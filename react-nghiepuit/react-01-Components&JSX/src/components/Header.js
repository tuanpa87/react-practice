import React, { Component } from 'react';
// import FontAwesome from 'react-fontawesome';


class Header extends Component {
    render() { //hien thi giao dien cho nguoi dung
        return ( //JSX
            <div>
              <h1><i className="fa fa-glass fa-spin"></i>Header<i className="fa fa-glass fa-spin"></i></h1>
              {/* <h1> <FontAwesome name="linkedin"/>Header<FontAwesome name="linkedin"/></h1> */}

            </div>
        );
    }
}

export default Header;
