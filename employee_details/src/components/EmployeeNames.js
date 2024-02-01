import React from "react";
function EmployeeNames(props){
    function handleClick (){
        


        props.onClick(props.name)
    };

    return(
        <button id = "Empnames"
        onClick = {handleClick}
        style={{ backgroundColor: props.isSelected ? "yellow" : "transparent" }}>
        {props.name}
        </button>
        
    );
}
export default EmployeeNames;