import React, { useState,useEffect } from "react"
import Login from "./components/login/login";
import Header from "./components/Navigationbar/index";
import Footer from "./components/footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
  } from "react-router-dom";
import Register from "./components/Registration";
import './App.css'
import * as style from 'react-bootstrap';


function App() {
  
 
  return (
 
  

 

  <div className='app'>
               
               
                <Header />
    
   
  

                <Footer />

                
               

  </div>
 


  )
 
}
export default App;

