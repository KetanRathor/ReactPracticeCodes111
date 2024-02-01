import React from "react";
import{ useState } from "react";

 function Header(props){


    const [text, setText] = useState("");
    function handleSearchClick(){
        props.settextFunction(text);
    }

    // function handleSearchClick() {
        
    //     if (text === undefined ) {
    //         alert("text is undefined or empty!");
    //       } else {
    //         props.settextFunction(text);
    //       }
          
    //   }
      

    // function handleInputChange(e){
    //     text = (e.target.value)
    // }

    // function handleSortAsc(e){
    //     props.setSelectedSortButtonFunction(e.target.id)
    // }

    // function handleSortDesc(e){
    //     props.setSelectedSortButtonFunction(e.target.id)

    // let text

    return(
        <div id="Header">
        <div id="Header1">
            Employee Details
            
        </div>
        <div id="ToolBar">
            <p id ="totalEmployees">Total Employees: {props.totalEmployees.length} </p>
        <button id="add" type="button">Add Employes</button>
        <input type="text" id="fname" name="fname" placeholder="search" 
         onChange={(e)=>setText  (e.target.value)}
         />
        <button id="Search" type="button" onClick={handleSearchClick}>Search</button>

        <button id="Asc" type="button" onClick={(e)=>props.setSelectedSortButtonFunction(e.target.id)}>Asc</button>
        <button id="Desc" type="button"  onClick={(e)=>props.setSelectedSortButtonFunction(e.target.id)}>Desc</button>
        


        </div>
        </div>
    )
 }
 export default Header;