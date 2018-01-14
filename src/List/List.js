
import React, { Component } from "react";
import './List.css';
import { connect } from 'react-redux'

// Technically not best practice to have Components other than the main one or where it's not necessary
class List extends Component {
 constructor(props, context) {
   super(props, context);



   this.createTasks = this.createTasks.bind(this);
 }
// So we can add delete to the createTasks which we will put in the render
 delete(key) {
    this.props.delete(key);
  }
// Tells us what to create with the JSX when we put it in the render and then call it over in App.js
 createTasks(item) {
   return <li onClick={() => this.delete(item.key)} 
   key={item.key}>{item.text}</li>
 }

//  This is what appears when <List> is used in the JSX on App.js
 render() {
   var todoEntries = this.props.entries;
   var listItems = todoEntries.map(this.createTasks);

   return (
     <ul onClick={this.props.click} className="theList">
         {listItems}
     </ul>
   );
 }
};

const mapStateToProps = state => {
    return {
        name: state.items
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onName: () => dispatch({type: 'NAME'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
