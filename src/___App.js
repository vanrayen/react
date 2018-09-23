import React, { Component } from 'react';
import DaftarBlog from './components/BlogList'
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React - Developer Circle</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <DaftarBlog/>
        <DaftarBlog/>
        <DaftarBlog/>
      </div>
    );
  }
}

export default App;
