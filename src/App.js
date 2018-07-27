import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
      
      <div className="card">
      <img className="card-img-top" src="http://s2.thingpic.com/images/QN/tqh1UmemP1KTQFkvjkoSyMWL.jpeg" alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">My Cat</h5>
        <p className="card-text">This Cat is fat.</p>
        <p className="card-weight"> 200 lbs. </p>
        <a href="pets" className="btn btn-primary">Pet Details</a>
      </div>
      </div>
      </div>
    );
  }
}

export default App;
