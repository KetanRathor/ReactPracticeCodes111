import React from "react";
 function Header(props){
    function handleSearchClick(){
        props.onSearch(props.searchInput);
    }
    function handleInputChange(e){
        props.onSearch(e.target.value)
    }

    return(
        <div id="Header">
        <div id="Header1">
            Employee Details
            
        </div>
        <div id="ToolBar">
            <p id ="totalEmployees">Total Employees: {props.totalEmployees} </p>
        <button id="add" type="button">Add Employes</button>
        <input type="text" id="fname" name="fname" value={props.searchInput} onChange={handleInputChange}/>
        <button id="Search" type="button" onClick={handleSearchClick}>Search</button>

        <button id="Asc" type="button">Asc</button>
        <button id="Desc" type="button">Desc</button>


        </div>
        </div>
    )
 }
 export default Header;