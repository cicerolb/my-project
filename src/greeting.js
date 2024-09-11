import React from "react";

function Greeting(props){
    return (
        <h2> Name:  
        {props.name} 
        <br />
        Age:
        {props.age} 
        <br />
        Location:
        {props.location}
        </h2>
    );
    
}

export default Greeting;