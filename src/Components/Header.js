import React, { Component } from 'react';
import '../App.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css'

class Header extends Component{
  render(){
    return(
      <div className="header">
        <span className="logo"><i className="fa fa-edit"></i></span>
        <h2>React To-Do App</h2>
      </div>
    );
  }
}

export default Header;
