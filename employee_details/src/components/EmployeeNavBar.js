import React from "react";

const employees = [
    { name: "Ketan", Salary: 20000, dID: 100, Designation: "Developer" },
    // Add more employee objects as needed
  ];
function EmployeeNavBar(){


    return (
        <div id="EmployeeNavBar">
          {employees.map((employee, index) => (
            <div key={index}>{employee.name}</div>
          ))}
        </div>
      );
}
export default EmployeeNavBar;