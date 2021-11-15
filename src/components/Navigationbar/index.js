import React, { useState,useEffect } from "react"
import Navbar from 'react-bootstrap/Navbar'
import './style.css'
import Registration from "../Registration";
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


import Login from "../login/login";
import {
    BrowserRouter as Router,
    Switch,   
    Routes,
    Route,
    Link,
    useParams,
    useRouteMatch,
    useLocation,
    NavLink
  } from "react-router-dom";
import Register from "../Registration";
import Headlines from "../../Headlines";



function Header() {

    return(


<Router>  
<header className='header'>
 


<Navbar className='container nav left-align'>

<li><NavLink  to='/'>Casmag</NavLink></li>
<li><NavLink to='/Headlines'>Ex1</NavLink></li>
<li><NavLink to='/'>EX2</NavLink></li>
<li><NavLink exact to="/Signup">Signup</NavLink></li>

<div class=""></div>
<div class="login-container-right">
<Login></Login>
</div>

</Navbar>
     








</header>

<Routes>
      <Route exact path="/">
       
      </Route>
      <Route path="/Signup" element={<Register />} />
      <Route path="/Headlines" element={<Headlines/>} />   
    
      
    </Routes>

</Router>  
    )
    
}






export default Header