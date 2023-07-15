import React from "react";
import { ReactDOM } from "react";
import { useState } from "react";

function Input(){

   let [name,setName] = useState("");

    const inputName = (event)=>{
        setName(event.target.value)
    }

   return(
    <div>

    <p>Enter your name:</p>  
    <input type="text" className="name" onChange={inputName}/>
    <p>Hello {name}!</p>
    </div>
   )
}

export default Input;