import React from "react";
import Button from "@mui/material/Button";
import { ListItem,borderStyle } from "@mui/material";
function EmployeeNames(props) {
    function handleClick() {

        props.onClickEmployee(props.emp)
    };

    return (
        <ListItem 
        sx={{borderBottom:"solid", width:"100%"}}
        >
            <Button id="Empnames"
                variant="inherit"

                sx={{width:"100%"}}

                onClick={handleClick}
                style={{ backgroundColor: props.isSelected ? "yellow" : "transparent" }}>
                {props.emp.name}
            </Button>
        </ListItem>
    );
}
export default EmployeeNames;