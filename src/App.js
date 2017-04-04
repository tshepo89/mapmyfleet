import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="page-container">   
        <Header />     
        {this.props.children}
      </div>
    );
  }
}

export default App;