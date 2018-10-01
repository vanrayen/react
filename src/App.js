import React, { Component } from 'react';
import DaftarBlog from './components/BlogList';
import SearchBox from './components/SearchBox'
//import logo from './logo.svg';
import './App.css';
import Axios from 'axios';

//const alamaturl = "https://cdn.rawgit.com/kevinhermawan/ca5e0083648ba5ffb2421808d972dd9c/raw/c29c7ee02849b58024fb6a058acae33bde38cbd3/react-blog-example.json";
const alamaturl = "https://minepro.co.id/user/list-ultah";

//const articles = require ('./react-blog-example.json');

class App extends Component 
{
    constructor(props)
    {
      super(props)
      this.state = {
        articles:[],
        searchKey:"",
        loading:false
      }
      //this.doSearch = this.doSearch.bind(this)
    }

    componentDidMount()
    {
      //console.log(articles);
      /*console.log(this.state.articles)
      this.setState(
        {
          loading:true
        }
      )*/

      console.log(Axios)

      //FETCH Method
      /*
      fetch(alamaturl)
        .then((data)=>data.json())
        .then((data)=>{
          //console.log(data)
          //console.log(this.state.articles)
          this.setState(
            {
              articles:data
              //loading:false
            }
          )
          //console.log(this.state.articles)
          //console.log(this.state.loading)
      })
      */

      this.setState({loading:true})

      //AXIOS Method, ngegate data / fetch via library axios
      Axios.get(alamaturl)
        .then( Response => {
          if( Response.status === 200 )
          {
            this.setState(
              {
                articles:Response.data,
                loading:false
              }
            )
          }
      })
      .catch((err) => { if (err){ this.setState({loading:false})} })
    }

    //method
    doSearch = (event) =>
    {
      //console.log("Search Please");
      console.log(event.target.value);
      this.setState(
        {
          searchKey: event.target.value
        })
    }

    render() 
    {
      const ComponentLoading = <h1>Loading ...</h1>

      const filteredArticles = this.state.articles.filter(article=>
        (
          article.title.toLowerCase()
          .includes(this.state.searchKey)
        )
      )

      const articles = filteredArticles.map((article,index) =>
      
      <DaftarBlog 
        article={article}
        key={index}
        //article="articles[0]"
      />)
      

      return (
        <div className="App container">
            <SearchBox 
                onSearch={this.doSearch} 
            />
            <h2>{this.state.searchKey}</h2>
            
            {this.state.loading ? ComponentLoading : articles} 
        </div>
      );
    }
}

export default App;
