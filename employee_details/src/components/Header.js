import React from "react";
 function Header(){

    return(
        <div id="Header">
        <div id="Header1">
            Employee Details
            
        </div>
        <div id="ToolBar">
        <button id="add" type="button">Add Employes</button>
        <input type="text" id="fname" name="fname"/>
        <button id="Search" type="button">Search</button>

        <button id="Asc" type="button">Asc</button>
        <button id="Desc" type="button">Desc</button>


        </div>
        </div>
    )
 }
 export default Header;