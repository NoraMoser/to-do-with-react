
import React, { Component } from "react";
import './List.css'

class List extends Component {
 constructor(props, context) {
   super(props, context);



   this.createTasks = this.createTasks.bind(this);
 }

 delete(key) {
    this.props.delete(key);
  }

 createTasks(item) {
   return <li onClick={() => this.delete(item.key)} 
   key={item.key}>{item.text}</li>
 }

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

export default List;

// const item = ( props ) => {

//     return (
//         <div>
//         <p onClick={props.click}>{props.name}</p>
        {/* <input type='text' onChange={props.changed} /> */}
//         </div>
//         )
//     };

// export default item;