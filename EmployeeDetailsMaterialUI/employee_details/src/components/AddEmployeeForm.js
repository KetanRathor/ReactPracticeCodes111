import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";



function AddEmployeeForm(props){

    const [employee, setEmployee] = useState({
        id: "",
        name: "",
        Salary: "",
        Designation: "",
      });
    
    const handleEmployeeChange = (e) => {
        console.log("Handle Employee Change Called");
        const obj =  {}
        obj[e.target.id] = e.target.value
        setEmployee({...employee,...obj});
      };

    function handleFormSubmit(e){
        e.preventDefault();
        props.handleAddEmployee(employee);
        props.setAddEmployeeFormVisible(false);

    };    
    


    return(
        <Stack id= "EmployeeForm"
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        top={"0px"}

        >
        <Typography variant="h6"> Add Employee Details</Typography>
        <form onSubmit={handleFormSubmit}>
        <label htmlFor="id">Id:</label>
        <TextField type="text" id="id" name="id"
        // sx={{ height: "2%" }}
        value={employee.id}
        onChange={handleEmployeeChange}
        /> <br/>

        <label htmlFor="name">Name:</label>
        <TextField type="text" id="name" name="name"
        value={employee.name}
        onChange={handleEmployeeChange}
        /> <br/>

        <label htmlFor="salary">Salary:</label>
        <TextField type="text" id="Salary" name="salary"
        value={employee.Salary}
        onChange={handleEmployeeChange}
        /> <br/>

        <label htmlFor="designation">Designation:</label>
        <TextField type="text" id="Designation" name="designation" 
        value={employee.Designation}
        onChange={handleEmployeeChange}
        /> <br/>

        <Button type="submit" value="Submit" > Submit </Button>
        </form>
        </Stack>

        
    )
}
export default AddEmployeeForm;