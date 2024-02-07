import React, { useState } from "react";



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
        <div id= "EmployeeForm">
        <h2>Add Employee Details</h2>
        <form  onSubmit={handleFormSubmit}>
        <label htmlFor="id">Id:</label>
        <input type="text" id="id" name="id"
        value={employee.id}
        onChange={handleEmployeeChange}
        /> <br/>

        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name"
        value={employee.name}
        onChange={handleEmployeeChange}
        /> <br/>

        <label htmlFor="salary">Salary:</label>
        <input type="text" id="Salary" name="salary"
        value={employee.Salary}
        onChange={handleEmployeeChange}
        /> <br/>

        <label htmlFor="designation">Designation:</label>
        <input type="text" id="Designation" name="designation" 
        value={employee.Designation}
        onChange={handleEmployeeChange}
        /> <br/>

        <input type="submit" value="Submit" />
        </form>
        </div>

        
    )
}
export default AddEmployeeForm;