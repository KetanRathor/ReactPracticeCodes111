import React, { useState } from 'react';
import Ayslogo from "./components/Ayslogo";
import Header from "./components/Header";
import EmployeeNavBar from "./components/EmployeeNavBar";

import './App.css';

function App() {
    const [employees, setEmployees] = useState[{ name: "Ketan", Salary: 20000, dID: 1, Designation: "Developer" }, { name: "John", Salary: 25000, dID: 2, Designation: "Designer" }, { name: "Alice", Salary: 30000, dID: 3, Designation: "Manager" }, { name: "Bob", Salary: 22000, dID: 4, Designation: "Developer" }, { name: "Eva", Salary: 28000, dID: 5, Designation: "Tester" }, { name: "Michael", Salary: 27000, dID: 6, Designation: "Manager" }, { name: "Sophia", Salary: 24000, dID: 7, Designation: "Designer" }, { name: "William", Salary: 26000, dID: 8, Designation: "Developer" }, { name: "Emma", Salary: 29000, dID: 9, Designation: "Tester" }, { name: "Oliver", Salary: 31000, dID: 10, Designation: "Manager" }];

    return ( <
        div id = "App" >
        <
        Ayslogo / >
        <
        Header / >

        <
        EmployeeNavBar employees = { employees }
        />  <
        /div>
    );
}

export default App;