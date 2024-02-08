import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { blue, green, common, cyan } from '@mui/material/colors';
import { AppBar, Avatar, Grid, Toolbar,img } from "@mui/material";




function Header(props) {
    // function handleAddEmployeesClick() {
    //     props.setAddEmployeeFormVisible(true);
    // };

    // function handleSearchClick() {
    //     props.settextFunction(props.text);
    // }

    return (
        <>
            <AppBar id="Header1"
                sx={{ height: "17%", width:"100%" ,backgroundColor: "white" }}
            >
                <Toolbar>
                    <img src="..\AYSLogo1.jpg" alt=""
                        style={{ height: "100%", width: "20%", paddingTop: "3px" }} />
                    {/* <Typography
                        variant="h6"
                        sx={{ color: "black", marginLeft:"25%" }}
                    >Employee Details</Typography> */}

                    <Typography id="totalEmployees" color="primary" sx={{ marginLeft: "65%" }}>Total Employees: {props.employees.length} </Typography>
                    {/* <Button
                        id="add"
                        type="button"
                        onClick={handleAddEmployeesClick}
                        // variant="contained" 
                        sx={{ fontSize: '8px', color: cyan[500],marginLeft:"10%",'&:hover': { backgroundColor: green[500], }, }}
                        startIcon={<AddIcon />}
                    >Add Employees</Button> */}
                </Toolbar>
            </AppBar>
            {/* <Stack id="ToolBar" direction="row" > */}



            {/* <TextField type="text" id="fname" name="fname" label="Search" variant="standard"
                    onChange={(e) => props.setText(e.target.value)}
                />
                <Button id="Search" type="button" onClick={handleSearchClick}
                variant="outlined"
                >Search</Button>
                <Button id="Asc" type="button" style={{ backgroundColor: props.selectedSortButton === "Asc" ? "red" : "" }} onClick={(e) => props.setSelectedSortButtonFunction(e.target.id)}
                variant="outlined"
                >Asc</Button>
                <Button id="Desc" type="button" style={{ backgroundColor: props.selectedSortButton === "Desc" ? "red" : "" }} onClick={(e) => props.setSelectedSortButtonFunction(e.target.id)}
                variant="outlined"
                >Desc</Button> */}
            {/* </Stack> */}
        </>
    )
}
export default Header;







// import React from "react";

// function Header(props) {
//     function handleAddEmployeesClick() {
//         props.setAddEmployeeFormVisible(true);
//     };

//     function handleSearchClick() {
//         props.settextFunction(props.text);
//     }

//     return (
//         <div id="Header">
//             <div id="Header1">
//                 Employee Details

//             </div>
//             <div id="ToolBar">
//                 <p id="totalEmployees">Total Employees: {props.employees.length} </p>
//                 <button id="add" type="button" onClick={handleAddEmployeesClick} >Add Employes</button>
//                 <input type="text" id="fname" name="fname" placeholder="search"
//                     onChange={(e) => props.setText(e.target.value)}
//                 />
//                 <button id="Search" type="button" onClick={handleSearchClick}>Search</button>
//                 <button id="Asc" type="button" style={{ backgroundColor: props.selectedSortButton === "Asc" ? "red" : "" }} onClick={(e) => props.setSelectedSortButtonFunction(e.target.id)}>Asc</button>
//                 <button id="Desc" type="button" style={{ backgroundColor: props.selectedSortButton === "Desc" ? "red" : "" }} onClick={(e) => props.setSelectedSortButtonFunction(e.target.id)}>Desc</button>
//             </div>
//         </div>
//     )
// }
// export default Header;