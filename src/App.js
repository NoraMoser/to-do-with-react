import React, { Component } from 'react';
import './App.css';
import List from './List/List';

class App extends Component {

  addItemHandler = () => {
    console.log('button was clicked');
  }

  render() {
    return (
      <div className="App">
        <h1>To-Do List</h1>
        <List />
        <button onClick={this.addItemHandler}>Click Me</button>
      </div>
    );
  }
}

export default App;
