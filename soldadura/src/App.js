//import React from 'react';
import React, { Component } from 'react';
import './App.css';
import home from './components/home/home';
import products from './components/products/prodduct';
import about from './components/about/about';
import Nav from "./components//navbar/navbar";
import { BrowserRouter } from 'react-router-dom';


class App extends Component {

 

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Nav/>
           
          </div>
        </BrowserRouter>
     
      </div>
    );
  }
}

export default App;
