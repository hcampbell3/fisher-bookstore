import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Routes from "./Routes";


export default class App extends Component {
  render() {
    return (
      <div className="App container">
        <Navbar bg="light" expand="lg">
            <Navbar.Brand>
              <Link to="/">Fisher Bookstore</Link>
            </Navbar.Brand>
        </Navbar>
        <Routes />
      </div>
    );
    //return <div>Fisher Bookstore</div>
  }
};
