import React from "react";
import Stack from "@mui/material/Stack";
// import Box from "@mui/material/Box";

function Header(props) {
    function handleAddEmployeesClick() {
        props.setAddEmployeeFormVisible(true);
    };

    function handleSearchClick() {
        props.settextFunction(props.text);
    }

    return (
        <Stack id="Header">
            <Stack id="Header1">
                Employee Details

            </Stack>
            <Stack id="ToolBar" direction="row" >
                <p id="totalEmployees">Total Employees: {props.employees.length} </p>
                <button id="add" type="button" onClick={handleAddEmployeesClick} >Add Employes</button>
                <input type="text" id="fname" name="fname" placeholder="search"
                    onChange={(e) => props.setText(e.target.value)}
                />
                <button id="Search" type="button" onClick={handleSearchClick}>Search</button>
                <button id="Asc" type="button" style={{ backgroundColor: props.selectedSortButton === "Asc" ? "red" : "" }} onClick={(e) => props.setSelectedSortButtonFunction(e.target.id)}>Asc</button>
                <button id="Desc" type="button" style={{ backgroundColor: props.selectedSortButton === "Desc" ? "red" : "" }} onClick={(e) => props.setSelectedSortButtonFunction(e.target.id)}>Desc</button>
            </Stack>
        </Stack>
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