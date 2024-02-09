import { Button, Stack, Typography,Card } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from "@mui/icons-material/Create";


import React from "react";

function EmployeeDetails(props) {
  
  function handleDelete(){
    if(props.employee.id){
      props.handleDeleteEmployee(props.employee.id);
    };
  }

    if (Object.keys(props.employee).length > 0) {
    return (
        <Card id="EmployeeDetails"
        sx={{height:"25vh",width:"50vh",textAlign: "left"}}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        
        
        >
      <Stack id="EmployeeDetails1"
      // sx={{width:"150%"}}
      >
        <Typography variant="h6">Employee Details</Typography>
        <Typography>Id: {props.employee.id}</Typography>
        <Typography>Name: {props.employee.name}</Typography>
        <Typography>Salary: {props.employee.Salary}</Typography>
        <Typography>Designation: {props.employee.Designation}</Typography>
        <Stack direction="row"spacing={1}>
        
        <Button id="Edit" type="button"
        sx={{width:"40%", height:"20px", fontSize: '10px'}}
        startIcon={<EditIcon />}
        variant="contained"

        >Edit</Button>

        <Button id="Delete" type="button"  onClick={handleDelete}
        sx={{width:"40%", height:"20px", fontSize: '10px', color:"red"}}
        startIcon={<DeleteIcon/>}
        variant="outlined"
        
        >Delete </Button>
        </Stack>

      </Stack>
      </Card>
    

    );
  } else {
    return null;
  }
}

export default EmployeeDetails;