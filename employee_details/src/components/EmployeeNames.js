import React from "react";
function EmployeeNames(props){
    function handleClick (){
        
        props.onClickEmployee(props.emp)
    };

    return(
        <button id = "Empnames"
        onClick = {handleClick}
        style={{ backgroundColor: props.isSelected ? "yellow" : "transparent" }}>
        {props.emp.name}
        </button>
        
    );
}
export default EmployeeNames;