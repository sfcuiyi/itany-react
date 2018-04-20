import React, { Component } from 'react';
import './App.css';
import { BrowserRouter , Route , Link } from "react-router-dom";

import BookList from "./components/booklist/BookList";
import Nav from "./components/nav/Nav"
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
            <div className='row'>
               <Nav />
            </div>
            <div className="row">
              <Route exact path="/" component={BookList}/>
              <Route path="/books/:id" component={BookList}/>
            </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
