import React from "react";
import EmployeeNames from "./EmployeeNames";


function EmployeeNavBar(props){
  function isEmployeeSelected(employeeName) {
    return props.selectedEmployee.name === employeeName;
  }


  function employeeList(){
    const list = [];

    for(let i = 0; i<props.employees.length;i++){
      const employee = props.employees[i];
      list.push(
        <EmployeeNames 
        key = {i} 
        name={employee.name}
        onClick = {props.onEmployeeClick}
        isSelected={isEmployeeSelected(employee.name)} />
      )
    }
    return list;
  }


    return (
        <div id="EmployeeNavBar">
         {employeeList()}
        </div>
      );
}
export default EmployeeNavBar;