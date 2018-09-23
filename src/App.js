import React, { Component } from 'react';
import DaftarBlog from './components/BlogList'
import logo from './logo.svg';
import './App.css';

const link =
  "https://cdn.rawgit.com/kevinhermawan/ca5e0083648ba5ffb2421808d972dd9c/raw/c29c7ee02849b58024fb6a058acae33bde38cbd3/react-blog-example.json";

class App extends Component {
  render() {
    return (
      <div className="App">
          <DaftarBlog/>
      </div>
    );
  }
}

export default App;
