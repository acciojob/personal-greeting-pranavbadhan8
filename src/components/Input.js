import React from "react";
import { useState } from "react";

function Input(){

   let [name,setName]=useState("");

    const inputName = (event)=>{
        setName("Hello "+ event.target.value+"!")
    }

   return(
    <div>

    <label>Enter your name: </label> 
    <input type="text" className="name" onChange={inputName}/>
    <p>{name}</p>
    </div>
   )
}

export default Input;