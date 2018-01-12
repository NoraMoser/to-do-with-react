import React, { Component } from 'react';
import './App.css';
import List from './List/List';

class App extends Component {
  state = {
    items: [
      {id: 'dsf', name: 'Butter'},
      {id: 'sdf', name: 'Milk'}
    ],
    
  }



  addItemHandler = (event, id) => {
    const itemIndex = this.state.items.findIndex(i => {
      return i.id === id;
    });

    const item = {
      ...this.state.items[itemIndex]
    };

    // const item = Object.assign({}, this.state.items[itemIndex]);

    item.name = event.target.value;

    const items = [...this.state.items];
    items[itemIndex] = item;

    this.setState({items: items})
  }

  deleteItemHandler = (itemIndex) => {
    // const items = this.state.items.slice();
    const items = [...this.state.items]
    items.splice(itemIndex, 1);
    this.setState({items: items})
  }


  onEnter = (event) => {
    var title = this.title.value;
    console.log(title);
}





  render() {

    
    return (
     
      <div className="App">
        <h1>To-Do List</h1>
        {/* <input id="input" type="text"></input> */}
        <input type="text" className="form-control" ref={(c) => this.title = c} name="title" />
        <button type="button" onClick={this.onEnter.bind(this)} className="btn">Save</button>
        {/* <List name={this.state.items[0].name}/>
        <List name={this.state.items[1].name}/> */}

        {this.state.items.map((item, index) => {
          return <List 
          click={() => this.deleteItemHandler(index)}
          name={item.name}
          key={item.id}
          changed={this.nameChangeHandler}/>
        })}
        
      </div>
    );
  }
}

export default App;
