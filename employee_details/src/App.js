import React from 'react';
import Ayslogo from "./components/Ayslogo"; 
import Header from "./components/Header";
import EmployeeNavBar from "./components/EmployeeNavBar";

import './App.css';

function App() {
  return (
    <div id="App">
      <Ayslogo />
      <Header/>
     
      <EmployeeNavBar/>
    </div>
  );
}

export default App;