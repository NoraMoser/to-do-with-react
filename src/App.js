import React, { Component } from 'react';
import './App.css';
import List from './List/List';
import Cockpit from './Cockpit/Cockpit';

class App extends Component {

  // This is so the "this" keyword functions properly. According to other tutorials, it's not necessary.  State is a keyword in React so it should work without the "this" before it.  
  constructor(props, context) {
    super(props, context);

    this.state = {
      items: []
    };

    
    this.addItemHandler = this.addItemHandler.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  // Handler is a common term in React, but not required and aarow functions are best practice.
  addItemHandler = (e) => {
    
    var itemArray = this.state.items;
    
    // This says if the input value isn't nothing, add it to the itemArray.
     if (this._inputElement.value !== "") {
       itemArray.unshift({
           text: this._inputElement.value,
           key: Date.now()
       });
    // setState is a keyword that makes it possible to change the original state.
       this.setState({
         items: itemArray
       });
    
       this._inputElement.value = "";
     }
    
     console.log(itemArray);
      
    //  Default refreshes the page and clears it each time- this prevents that 
     e.preventDefault();

     }
  


// This way works too with slight reconfiguration, so I'm leaving it for reference

  // deleteItemHandler = (itemIndex) => {
    // const items = this.state.items.slice();
  //   const items = [...this.state.items]
  //   items.splice(itemIndex, 1);
  //   this.setState({items: items})
  // }

  deleteItem(key) {

    // filter is getting each item from the this.state and performing an action on them
    var filteredItems = this.state.items.filter(function (item) {

      // return the item.key if there is not a key
      return (item.key !== key);
    });
   
    // change the original state so now the items are the filteredItems from above
    this.setState({
      items: filteredItems
    });
  }

  render() {

    const style = {
      backgroundColor: 'lightblue',
      border: '2px black solid',
      padding: '7px',
      width: '50px',
      marginLeft: '3px',
      boxShadow: '2px 1px gray',
      fontWeight: 'bold',
      font: '1px'
    };
  
    return (
     
      // This is the JSX code (<List is from List.js and <Cockpit is from Cockpit.js)
      <div className="App">
        <Cockpit />
        <div className="header">
          <form onSubmit={this.addItemHandler}>
            <input ref={(a) => this._inputElement = a} placeholder="items">
            </input>
            <button style={style} type="submit">add</button>
          </form>
        </div>
        <List 
        entries={this.state.items}
        delete={this.deleteItem}
        />
      </div>
    );
  }
}
// Export the class we just created
export default App;