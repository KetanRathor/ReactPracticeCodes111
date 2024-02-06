import React from "react";


function AddEmployeeForm(props){
    function handleFormSubmit(e){
        e.preventDefault();
        props.handleAddEmployee(props.employee);

    };    
    


    return(
        <div id= "EmployeeForm">
        <h2>Add Employee Details</h2>
        <form  onSubmit={handleFormSubmit}>
        <label for="id">Id:</label>
        <input type="text" id="id" name="id"
        value={props.employee.id}
        onChange={props.onEmployeeChange}
        /> <br/>

        <label for="name">Name:</label>
        <input type="text" id="name" name="name"
        value={props.employee.name}
        onChange={props.onEmployeeChange}
        /> <br/>

        <label for="salary">Salary:</label>
        <input type="text" id="salary" name="salary"
        value={props.employee.salary}
        onChange={props.onEmployeeChange}
        /> <br/>

        <label for="designation">Designation:</label>
        <input type="text" id="designation" name="designation" 
        value={props.employee.designation}
        onChange={props.onEmployeeChange}
        /> <br/>

        <input type="submit" value="Submit" />
        </form>
        </div>

        
    )
}
export default AddEmployeeForm;