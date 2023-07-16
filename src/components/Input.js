import React from "react";
import { useState } from "react";

function Input(){

   let [name,setName]=useState("");

    const inputName = (event)=>{
        setName("Hello "+ event.target.value+"!")
    }

   return(
    <div>

    <h1>Enter your name: </h1> 
    <input type="text" className="name" onChange={inputName}/>
    <h1>{name}</h1>
    </div>
   )
}

export default Input;