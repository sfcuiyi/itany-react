import React, { Component } from 'react';
import { BrowserRouter,Route,Link } from "react-router-dom";
import logo from '../logo.svg';
import './App.css';

import AboutMe from './components/aboutme/AboutMe';
import BlogList from './components/bloglist/BlogList';
import Links from './components/links/Links';
import BlogDetail from "./components/blogdetail/BlogDetail";
import AjaxComponent from "./components/ajax/AjaxComponent";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
              <div className="row">
                <ul className="nav nav-pills">
                  <li className="active">
                      <Link to="/">博客列表</Link>
                  </li>
                  <li>
                      <Link to="/links">链接</Link>
                    </li>
                  <li>
                      <Link to="/aboutme">关于</Link>
                  </li>
                  <li>
                      <Link to="/ajax">ajax</Link>
                  </li>
                </ul>
              </div>

            <div className="row">
              <Route exact path="/" component={BlogList}></Route>
              <Route path="/links" component={Links}></Route>
              <Route path="/aboutme" component={AboutMe}></Route>
              <Route path="/blogdetail/:id" component={BlogDetail}></Route>
              <Route path="/ajax" component={AjaxComponent}></Route>
            </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
