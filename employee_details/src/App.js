import React from 'react';
import {useState} from 'react';
import Ayslogo from "./components/Ayslogo"; 
import Header from "./components/Header";
import EmployeeNavBar from "./components/EmployeeNavBar";
import EmployeeDetails from './components/EmployeeDetails';

import './App.css';


function App() {
const EmployeesData = [
{ id:1, name: "Ketan", Salary: 20000, Designation: "Developer" },
{ id:2, name: "John", Salary: 25000, Designation: "Designer" },
{ id:3, name: "Alice", Salary: 30000, Designation: "Manager" },
{ id:4, name: "Bob", Salary: 22000, Designation: "Developer" },
{ id:5, name: "Eva", Salary: 28000, Designation: "Tester" },
{ id:6, name: "Michael", Salary: 27000, Designation: "Manager" },
{ id:7, name: "Sophia", Salary: 24000, Designation: "Designer" },
{ id:8, name: "William", Salary: 26000, Designation: "Developer" },
{ id:9, name: "Emma", Salary: 29000, Designation: "Tester" },
{ id:10, name: "Oliver", Salary: 31000,  Designation: "Manager" }
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

  function handleSortAsc(){
    const sortedEmployees = [...employees].sort((a,b)=>a.id-b.id);
    setEmployees(sortedEmployees);
  }

  function handleSortDesc(){
    const sortedEmployees = [...employees].sort((a,b)=>b.id-a.id);
    setEmployees(sortedEmployees);
  }



  return (
    <div id="App">
      <Ayslogo />
      <Header totalEmployees ={employees.length}
      onSearch = {handleSearch}
      
      onSortAsc = {handleSortAsc}
      onSortDesc = {handleSortDesc}
      />
     
      <EmployeeNavBar employees={employees} onEmployeeClick = {handleEmployeeClick} selectedEmployee={selectedEmployee}/>
      <EmployeeDetails employee = {selectedEmployee}/>
    </div>
  );
}

export default App;