//import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Navbar extends Component {
  //static propTypes = {}
  
  render() {
    const myStyle={
      textDecoration:"none",
      margin:"5px",
      
    }
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-dark ">
          <div className="container-fluid ">
            <Link className="navbar-brand text-light" to="/">NewsMonkey</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                <li className="nav-item">
                  <Link className="nav-a  text-light " aria-current="page" to="/"  style={myStyle}>Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-a text-light " to="/business"  style={myStyle}>Business</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-a text-light " to="/entertainment"  style={myStyle}>Entertainment</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-a text-light " to="/general"  style={myStyle}>General</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-a text-light " to="/health"  style={myStyle}>Health</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-a text-light  " to="/science"  style={myStyle}>Science</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-a text-light  " to="/sports"  style={myStyle}>Sports</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-a text-light " to="/technology"  style={myStyle}>Technology</Link>
                </li>

              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar