import React from "react";
import EmployeeNames from "./EmployeeNames";
// import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/AddCircleOutline";
import { blue, green, common, lightBlue } from '@mui/material/colors';
import { Grid, List, Box, Button, TextField, Stack, fontSize, marginRight, Paper } from "@mui/material";


function SideBar(props) {
  function isEmployeeSelected(employeeName) {
    return props.selectedEmployee.id === employeeName;

  }




  function EmployeeList() {
    let cloneArray = JSON.parse(JSON.stringify(props.employees));
    if (props.selectedSortButton.length !== 0) {
      if (props.selectedSortButton === "Asc") {
        cloneArray = cloneArray.sort((a, b) => a.name.localeCompare(b.name));

      }
      else {
        cloneArray = cloneArray.sort((a, b) => b.name.localeCompare(a.name));
      }
    }





    cloneArray = cloneArray.filter((employee) => employee.name.toLowerCase().startsWith(props.clickText.toLowerCase()));


    const list = [];

    // return (
    //   cloneArray.map((employee)=>{
    //     <EmployeeNames
    //     key = {employee.id} 
    //     emp={employee}
    //     onClickEmployee = {props.onEmployeeClick}
    //     isSelected={isEmployeeSelected(employee.id)} />
    //   })
    // )

    for (let i = 0; i < cloneArray.length; i++) {
      const employee = cloneArray[i];
      list.push(
        <EmployeeNames
          key={employee.id}
          emp={employee}
          onClickEmployee={props.onEmployeeClick}
          isSelected={isEmployeeSelected(employee.id)} />
      )
    }
    return list;
  }

  function handleAddEmployeesClick() {
    props.setAddEmployeeFormVisible(true);
  };

  function handleSearchClick() {
    props.settextFunction(props.text);
  }


  return (
    <Grid >
      <Stack
        sx={{ paddingTop: "9%" }}
      >
        <Box
          display={"flex"}
          flexDirection={"row"}
          
        >

          <TextField type="text" id="fname" name="fname" label="Search" variant="standard"
            onChange={(e) => props.setText(e.target.value)}
            sx={{ width: "70%" ,marginLeft:"5px" }}
          />
          <Button id="Search" type="button" onClick={handleSearchClick}
            sx={{ width: "10%", fontSize: "10px", margin: "14px" }}
            variant="outlined"
          >Search</Button>
        </Box>
        <Box
        >

          <Button id="Asc" type="button" style={{ backgroundColor: props.selectedSortButton === "Asc" ? "red" : "" }} onClick={(e) => props.setSelectedSortButtonFunction(e.target.id)}
            variant="outlined"
            sx={{ marginRight: "4px" }}
          >Asc</Button>
          <Button id="Desc" type="button" style={{ backgroundColor: props.selectedSortButton === "Desc" ? "red" : "" }} onClick={(e) => props.setSelectedSortButtonFunction(e.target.id)}
            variant="outlined"
          >Desc</Button>
          <Button
            id="add"
            type="button"
            onClick={handleAddEmployeesClick}
            // variant="contained" 
            sx={{ fontSize: '8px', color: lightBlue[500], '&:hover': { backgroundColor: green[500], }, }}
            startIcon={<AddIcon />}
          >Add Employees
          </Button>


        </Box>


      </Stack>
      <Paper
        elevation={3}
      >
        <List

          id="EmployeeNavBar">
          {EmployeeList()}
          {/* <EmployeeList/> */}
        </List>

      </Paper>
    </Grid>
  );
}
export default SideBar;