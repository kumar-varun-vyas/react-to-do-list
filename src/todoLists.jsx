import React from  'react';
import './index.css';

const TodoLists = (props)=>{

   


    return (
    <React.Fragment>
    <div className="Item-style">
        
        <li>{props.text}</li>
        <button onClick = {()=>{
            props.onSelect(props.id)
        }}><i class="material-icons">clear</i></button>
        <hr/>
    </div>
    </React.Fragment>)
}

export default TodoLists;