import React from "react";
 function Header(props){
    let text
    function handleSearchClick(){
        props.settextFunction(text);
    }
    function handleInputChange(e){
        text = (e.target.value)
    }

    function handleSortAsc(e){
        props.setSelectedSortButtonFunction(e.target.id)
    }

    function handleSortDesc(e){
        props.setSelectedSortButtonFunction(e.target.id)
    }



    return(
        <div id="Header">
        <div id="Header1">
            Employee Details
            
        </div>
        <div id="ToolBar">
            <p id ="totalEmployees">Total Employees: {props.totalEmployees.length} </p>
        <button id="add" type="button">Add Employes</button>
        <input type="text" id="fname" name="fname" placeholder="search"  onChange={handleInputChange}/>
        <button id="Search" type="button" onClick={handleSearchClick}>Search</button>

        <button id="Asc" type="button" onClick={handleSortAsc}>Asc</button>
        <button id="Desc" type="button"  onClick={handleSortDesc}>Desc</button>


        </div>
        </div>
    )
 }
 export default Header;