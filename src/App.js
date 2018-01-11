import React, { Component } from 'react';
import './App.css';
import List from './List/List';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>To-Do List</h1>
        <List />
      </div>
    );
  }
}

export default App;
