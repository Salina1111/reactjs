import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import User from './User';


class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
            <User  firstName={firstName} lastName={lastName} />
           
        </p>
      </div>
    );
  }
}

const firstName="Salina";
const lastName="Maharjan";

export default App;