import React, { useState } from 'react';
import TodoLists from './todoLists' ;
import './index.css';

    

const App =() =>{

    const [inputList, SetInputList] = useState("");

    const[items, SetItems ] = useState([])

    const inputEvent=(event)=>{
        return(
            SetInputList(event.target.value) 

        )
    };

    const listOfItems =()=>{
        SetItems((oldItems)=>{
            return [...oldItems, inputList]
        });
        SetInputList("");
    };
    const deleteItems=(id)=>{
        console.log("delete");
        SetItems((oldItems)=>{
        return oldItems.filter((arrElms, index) =>{
            return index  !== id;
        })
        })
    };

    return(
        <React.Fragment>
        <div className="main_div">
          <div className="div">
            <h1>to-do list</h1>
            <input type="text" placeholder="enter your to-do item" 
                onChange={inputEvent} value = {inputList}
             />
            <button onClick={listOfItems}> <i class="material-icons">add</i>
            </button>
            <div>
                <ol>
                  {
                      items.map((itemval, index)=>{
                          return (<TodoLists 
                          text = {itemval}
                          key = {index}
                          id = {index}
                          onSelect = {deleteItems}
                          
                           />
                          )
                      })
                  }
                </ol>

            </div>
            
          </div>
        
        
        </div>
        </React.Fragment>
    )
}

export default App;