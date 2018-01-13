import React, { Component } from 'react';
import './App.css';
import List from './List/List';
import Cockpit from './Cockpit/Cockpit';

class App extends Component {

  
  constructor(props, context) {
    super(props, context);

    this.state = {
      items: []
    };
 
    this.addItemHandler = this.addItemHandler.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addItemHandler(e) {
    
    var itemArray = this.state.items;
    
     if (this._inputElement.value !== "") {
       itemArray.unshift({
           text: this._inputElement.value,
           key: Date.now()
       });
    
       this.setState({
         items: itemArray
       });
    
       this._inputElement.value = "";
     }
    
     console.log(itemArray);
      
     e.preventDefault();

     }
  // state = {
  //   items: [
  //     {id: 'dsf', name: 'Butter'},
  //     {id: 'sdf', name: 'Milk'}
  //   ],
    
  // }



  // addItemHandler = (event, id) => {
  //   const itemIndex = this.state.items.findIndex(i => {
  //     return i.id === id;
  //   });

  //   const item = {
  //     ...this.state.items[itemIndex]
  //   };

    // const item = Object.assign({}, this.state.items[itemIndex]);

  //   item.name = event.target.value;

  //   const items = [...this.state.items];
  //   items[itemIndex] = item;

  //   this.setState({items: items})
  // }

  // deleteItemHandler = (itemIndex) => {
    // const items = this.state.items.slice();
  //   const items = [...this.state.items]
  //   items.splice(itemIndex, 1);
  //   this.setState({items: items})
  // }

  deleteItem(key) {
    var filteredItems = this.state.items.filter(function (item) {
      return (item.key !== key);
    });
   
    this.setState({
      items: filteredItems
    });
  }

  


//   onEnter = (event) => {
//     event.preventDefault();
//     var title = this.event.value;
//     console.log(title);
    
// }





  render() {

    
    return (
     
      <div className="App">
        <Cockpit />
        <div className="header">
          <form onSubmit={this.addItemHandler}>
            <input ref={(a) => this._inputElement = a} placeholder="enter task">
            </input>
            <button type="submit">add</button>
          </form>
        </div>
        {/* <input type="text" onChange={this.addItemHandler} value={this.state.items.name}/>
        <button type="button" onClick={this.onEnter.bind(this)} className="btn">Save</button>
        

        {this.state.items.map((item, index) => {
          return <List 
          click={() => this.deleteItemHandler(index)}
          name={item.name}
          key={item.id}
          changed={this.nameChangeHandler}/>
        })} */}
        <List 
        entries={this.state.items}
        delete={this.deleteItem}
        />
        
      </div>
    );
  }
}

export default App;