import React from 'react';
import './List.css';

const item = ( props ) => {

    return (
        <div>
        <p onClick={props.click}>{props.name}</p>
        {/* <input type='text' onChange={props.changed} /> */}
        </div>
        )
    };

export default item;