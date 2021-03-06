import React, { Component } from 'react';
import './bootstrap.css';
import PropTypes from 'prop-types';

class NavBar extends Component {
    render() {
      return (
        
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">My Github</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
            <a className="nav-item nav-link" href="#">Projects</a>
            <a className="nav-item nav-link" href="#">About Me</a>
            
          </div>
        </div>
      </nav>
        
      );
    }
  }



export default NavBar;