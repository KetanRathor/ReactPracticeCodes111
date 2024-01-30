// EmployeeNavBar.js

import React from 'react';

function EmployeeNavBar({ employees }) {
    return ( 
        <div id = "EmployeeNavBar" > { /* Map through the employees prop and display only names */ } {
            employees.map((employee, index) => ( 
                <div key = { index } > { employee.name } </div>
            ))
        } 
        </div>
    );
}

export default EmployeeNavBar;