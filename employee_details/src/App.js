<<<<<<< HEAD
import React, { useState } from 'react';
import Ayslogo from "./components/Ayslogo";
=======
import React from 'react';
import {useState} from 'react';
import Ayslogo from "./components/Ayslogo"; 
>>>>>>> dd363c4f617785cfe4f1ebe6a4daf222aa0808b2
import Header from "./components/Header";
import EmployeeNavBar from "./components/EmployeeNavBar";
import EmployeeDetails from './components/EmployeeDetails';

import './App.css';


function App() {
const EmployeesData = [
{ name: "Ketan", Salary: 20000, dID: 1, Designation: "Developer" },
{ name: "John", Salary: 25000, dID: 2, Designation: "Designer" },
{ name: "Alice", Salary: 30000, dID: 3, Designation: "Manager" },
{ name: "Bob", Salary: 22000, dID: 4, Designation: "Developer" },
{ name: "Eva", Salary: 28000, dID: 5, Designation: "Tester" },
{ name: "Michael", Salary: 27000, dID: 6, Designation: "Manager" },
{ name: "Sophia", Salary: 24000, dID: 7, Designation: "Designer" },
{ name: "William", Salary: 26000, dID: 8, Designation: "Developer" },
{ name: "Emma", Salary: 29000, dID: 9, Designation: "Tester" },
{ name: "Oliver", Salary: 31000, dID: 10, Designation: "Manager" }
];



  const [employees, setEmployees] = useState(EmployeesData);
  const [selectedEmployee, setSelectedEmployee] = useState({});
  const [seacrhInput, setSearchInput] = useState("");

  function handleEmployeeClick (employeeName)  {
    if (selectedEmployee.name === employeeName) {   
      setSelectedEmployee({});
    } else {    
      // setSelectedEmployee({name:employeeName});
      const clickedEmployee = employees.find((employee) => employee.name === employeeName);
      if (clickedEmployee) {
        setSelectedEmployee(clickedEmployee);
      } else {
        setSelectedEmployee({});
      }
    }
  };
  function handleSearch(searchValue){
    

    const filteredEmployee = EmployeesData.filter((employee) => employee.name.toLowerCase().includes(searchValue.toLowerCase()));
      setEmployees(filteredEmployee);

      setSearchInput(searchValue);


  }


  return (
    <div id="App">
      <Ayslogo />
      <Header totalEmployees ={employees.length}
      onSearch = {handleSearch}
      />
     
      <EmployeeNavBar employees={employees} onEmployeeClick = {handleEmployeeClick} selectedEmployee={selectedEmployee}/>
      <EmployeeDetails employee = {selectedEmployee}/>
    </div>
  );
>>>>>>> dd363c4f617785cfe4f1ebe6a4daf222aa0808b2
}

export default App;