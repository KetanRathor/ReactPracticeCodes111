import React from 'react';
import { useState } from 'react';
// import Ayslogo from "./components/Ayslogo"; 
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import EmployeeDetails from './components/EmployeeDetails';
import AddEmployeeForm from './components/AddEmployeeForm';

import './App.css';
import { Grid } from '@mui/material';



function App() {

  const employeesData = [
    { id: 1, name: "Ketan", Salary: 20000, Designation: "Developer" },
    { id: 2, name: "John", Salary: 25000, Designation: "Designer" },
    { id: 3, name: "Alice", Salary: 30000, Designation: "Manager" },
    { id: 4, name: "Bob", Salary: 22000, Designation: "Developer" },
    { id: 5, name: "Eva", Salary: 28000, Designation: "Tester" },
    { id: 6, name: "Michael", Salary: 27000, Designation: "Manager" },
    { id: 7, name: "Sophia", Salary: 24000, Designation: "Designer" },
    { id: 8, name: "William", Salary: 26000, Designation: "Developer" },
    { id: 9, name: "Emma", Salary: 29000, Designation: "Tester" },
    { id: 10, name: "Oliver", Salary: 31000, Designation: "Manager" }
  ];

  const [employees, setEmployees] = useState(employeesData);
  const [selectedEmployee, setSelectedEmployee] = useState({});
  const [selectedSortButton, setSelectedSortButton] = useState("");
  const [text, setText] = useState("")
  const [clickText, setClickText] = useState("");
  const [isAddEmployeeFormVisible, setAddEmployeeFormVisible] = useState(false);



  function handleAddEmployee(newEmployee) {
    const updatedEmployees = JSON.parse(JSON.stringify(employees));
    updatedEmployees.push(newEmployee);
    setEmployees(updatedEmployees);
  }





  function setSelectedSortButtonFunction(id) {
    setSelectedSortButton(id)
  }

  function settextFunction(text) {
    // setText(text)
    setClickText(text)
  }

  ///// Selecting Employee Click


  function handleEmployeeClick(employee) {
    if (selectedEmployee.id === employee.name) {
      setSelectedEmployee({});
    } else {
      // setSelectedEmployee({name:employeeName});
      setSelectedEmployee(employee);

    }
  };

  function handleDeleteEmployee(employeeId) {
    const cloneEmployees = JSON.parse(JSON.stringify(employees));

    const updatedEmployees = cloneEmployees.filter((employee) => employee.id !== employeeId);
    setEmployees(updatedEmployees);
    setSelectedEmployee({});
  }

  /////////////////Search Function
  // function handleSearch(searchValue){


  //   const filteredEmployee = employees.filter((employee) => employee.name.toLowerCase().includes(searchValue.toLowerCase()));
  //     setEmployees(filteredEmployee);

  //     setSearchInput(searchValue);





  return (
    <Grid>
      {/* <Ayslogo /> */}
    
      
      <Header
        employees={employees}
        // onSearch = {handleSearch}
        // searchInput={searchInput}
        settextFunction={settextFunction}
        text={text}
        setText={setText}
        // clickText = {clickText}
        // onSortAsc = {handleSortAsc}
        // onSortDesc = {handleSortDesc}
        setSelectedSortButtonFunction={setSelectedSortButtonFunction}
        selectedSortButton={selectedSortButton}
        setAddEmployeeFormVisible={setAddEmployeeFormVisible}

      />
      <Grid 
      display="flex"

      sx={{paddingTop:"6%"}}
      // container
      direction="row"
      // gap={30}
      
      >

        <SideBar employees={employees} onEmployeeClick={handleEmployeeClick} selectedEmployee={selectedEmployee}
          selectedSortButton={selectedSortButton}
          clickText={clickText}
          settextFunction={settextFunction}
          text={text}
          setText={setText}
          // clickText = {clickText}
          // onSortAsc = {handleSortAsc}
          // onSortDesc = {handleSortDesc}
          setSelectedSortButtonFunction={setSelectedSortButtonFunction}

          setAddEmployeeFormVisible={setAddEmployeeFormVisible}
        />
        <Grid
          display={'flex'}
          justifyContent={'center'}
          position={'relative'}
          left={"30%"}

        >
        <EmployeeDetails employee={selectedEmployee}
          handleDeleteEmployee={handleDeleteEmployee}
          setEmployees={setEmployees}
        />
        </Grid>
      </Grid>

      
      

        {isAddEmployeeFormVisible && <AddEmployeeForm
          handleAddEmployee={handleAddEmployee}
          employees={employees}
          setAddEmployeeFormVisible={setAddEmployeeFormVisible}
        />}
      
    </Grid>
  );
}

export default App;