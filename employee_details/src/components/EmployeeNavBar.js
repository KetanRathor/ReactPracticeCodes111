import React from "react";
import EmployeeNames from "./EmployeeNames";


function EmployeeNavBar(props){
  function isEmployeeSelected(employeeName) {
    return props.selectedEmployee.name === employeeName;
    
  }


  

  function employeeList(){
    let cloneArray = JSON.parse(JSON.stringify(props.employees));
    if(props.selectedSortButton.length!==0){
    if(props.selectedSortButton === "Asc"){
      cloneArray = cloneArray.sort((a,b)=>a.name.localeCompare(b.name));
    
    }
    else{
      cloneArray = cloneArray.sort((a, b) => b.name.localeCompare(a.name));
    }
  }

    

    cloneArray = cloneArray.filter((employee) => employee.name.toLowerCase().startsWith(props.text.toLowerCase()));

    
    const list = [];

    for(let i = 0; i<cloneArray.length;i++){
      const employee = cloneArray[i];
      list.push(
        <EmployeeNames
        key = {employee.id} 
        emp={employee}
        onClickEmployee = {props.onEmployeeClick}
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