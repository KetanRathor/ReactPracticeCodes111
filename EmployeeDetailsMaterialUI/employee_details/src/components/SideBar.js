import React from "react";
import { useState } from "react";
import EmployeeNames from "./EmployeeNames";
import AddIcon from "@mui/icons-material/AddCircleOutline";
import { blue, green, common, lightBlue } from '@mui/material/colors';
import { Drawer, List, Box, Button, TextField, Stack, Paper } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";


function SideBar(props) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);


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
    if (props.setAddEmployeeFormVisible) {
      props.setSelectedEmployee({});
    }
  };

  function handleSearchClick() {
    props.settextFunction(props.text);
  }
   function toggleDrawer(){
    setIsDrawerOpen(true);
   }

  return (
    <>
    <Button onClick={toggleDrawer}
    sx={{marginTop:"18px", marginLeft:"0px"}}
    >{<MenuIcon  sx={{fontSize: "30px"}}/>}</Button>
    <Drawer
      anchor="left"
      open={isDrawerOpen}
      variant="temporary"
      onClose={() => setIsDrawerOpen(false)}
      sx={{maxHeight:"80"}}
      >
      <Paper
        elevation={3}
      >
        <Stack
          sx={{ paddingTop: "9%" }}
        >
          <Box
            display={"flex"}
            flexDirection={"row"}
            >

            <TextField type="text" id="fname" name="fname" label="Search" variant="standard"
              onChange={(e) => props.setText(e.target.value)}
              sx={{ width: "70%", marginLeft: "5px" }}
            />
            <Button id="Search" type="button" onClick={handleSearchClick}
              sx={{ width: "10%", fontSize: "10px", margin: "14px" }}
              variant="outlined"
            >Search</Button>
          </Box>
          <Box>

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
              sx={{ fontSize: '10px', marginLeft: "30px", backgroundColor: green[500] }}
              startIcon={<AddIcon />}
            >Add Employees
            </Button>


          </Box>


        </Stack>

        <List

          id="EmployeeNavBar">
          {EmployeeList()}
        </List>

      </Paper>
    </Drawer>
    </>
  );
}
export default SideBar;







