import React, { Component } from 'react';
import DavDashboard from './dav/DavDashboard/DavDashboard';
import _config from './dav/DavDashboard/config';
// import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
         <DavDashboard config={_config} />
      </div>
    );
  }
}