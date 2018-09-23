import React, { Component } from 'react';
import DaftarBlog from './components/BlogList';
import logo from './logo.svg';
import './App.css';

const link = "https://cdn.rawgit.com/kevinhermawan/ca5e0083648ba5ffb2421808d972dd9c/raw/c29c7ee02849b58024fb6a058acae33bde38cbd3/react-blog-example.json";

//const articles = require ('./react-blog-example.json');

class App extends Component 
{
  constructor(props){
    super(props)
    this.state = {
      articles:[]
    }
  }

  componentDidMount()
  {
    //console.log(articles);
    console.log(this.state.articles)
  }

  render() {
    return (
      <div className="App">
          {
            articles.map((article) =>
                <DaftarBlog 
                  article={article}
                  //article="articles[0]"
                />)
          } 
      </div>
    );
  }
}

export default App;
