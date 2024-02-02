import React from "react";
function AddEmployeeForm(){


    return(
        <div>
        <h2>Add Employee Details</h2>

        <label for="id">Id:</label>
        <input type="text" id="id" name="id"/> <br/>

        <label for="name">Name:</label>
        <input type="text" id="name" name="name"/> <br/>

        <label for="salary">Salary:</label>
        <input type="text" id="salary" name="salary"/> <br/>

        <label for="designation">Designation:</label>
        <input type="text" id="designation" name="designation" /> <br/>

        <input type="submit" value="Submit"/>

        </div>

        
    )
}
export default AddEmployeeForm;