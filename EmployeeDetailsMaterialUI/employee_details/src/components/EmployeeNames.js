import React from "react";
import Button from "@mui/material/Button";
function EmployeeNames(props){
    function handleClick (){
        
        props.onClickEmployee(props.emp)
    };

    return(
        <Button id = "Empnames"
        variant="inherit"
        // sx={{color:"black"}}
       
        onClick = {handleClick}
        style={{ backgroundColor: props.isSelected ? "yellow" : "transparent" }}>
        {props.emp.name}
        </Button>
        
    );
}
export default EmployeeNames;