import React from 'react';
import {useState} from 'react';
import Ayslogo from "./components/Ayslogo"; 
import Header from "./components/Header";
import EmployeeNavBar from "./components/EmployeeNavBar";
import EmployeeDetails from './components/EmployeeDetails';
// import AddEmployeeForm from './components/AddEmployeeForm';

import './App.css';



function App() {
    
  const employeesData = [
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

  const [employees, setEmployees] = useState(employeesData);
  const [selectedEmployee, setSelectedEmployee] = useState({});
  // const [searchInput, setSearchInput] = useState("");

  const [selectedSortButton, setselectedSortButton] =useState("");

  const [text, settext] = useState("")


  function setSelectedSortButtonFunction(id){
    setselectedSortButton(id)
  }

  function settextFunction(text){
    settext(text)
  }

///// Selecting Employee Click


  function handleEmployeeClick (employee)  {
    if (selectedEmployee.name === employee.name) {   
      setSelectedEmployee({});
    } else {    
      // setSelectedEmployee({name:employeeName});
        setSelectedEmployee(employee);
        
    }
  };

  /////////////////Search Function
  // function handleSearch(searchValue){
    

  //   const filteredEmployee = employees.filter((employee) => employee.name.toLowerCase().includes(searchValue.toLowerCase()));
  //     setEmployees(filteredEmployee);

  //     setSearchInput(searchValue);


  


  return (
    <div id="App">
      <Ayslogo />
      <Header totalEmployees ={employees}
      // onSearch = {handleSearch}
      // searchInput={searchInput}
      settextFunction = {settextFunction}
      text={text}
      // onSortAsc = {handleSortAsc}
      // onSortDesc = {handleSortDesc}
      setSelectedSortButtonFunction={setSelectedSortButtonFunction}
      
      />
     
      <EmployeeNavBar employees={employees} onEmployeeClick = {handleEmployeeClick} selectedEmployee={selectedEmployee}
      selectedSortButton={selectedSortButton} 
      text={text}
      />
      
      <EmployeeDetails employee = {selectedEmployee}
      />
     
    </div>
  );
}

export default App;