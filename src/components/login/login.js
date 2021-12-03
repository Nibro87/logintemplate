import React, { useState,useEffect } from "react"
import { Row,NavDropdown } from "react-bootstrap";
import facade from "./loginFacade";
import './style.css' 

/// Made with help from youtube guides 

function LogIn({ login }) {
  const init = { username: "", password: "" };
  const [loginCredentials, setLoginCredentials] = useState(init);
 
  const performLogin = (evt) => {
    evt.preventDefault();
    login(loginCredentials.username, loginCredentials.password);
  }
  const onChange = (evt) => {
    setLoginCredentials({ ...loginCredentials,[evt.target.id]: evt.target.value })
  }
 
  return (
    
     
      <form onChange={onChange} >
        <div class="row">
        <input placeholder="Username" id="username" class="form-control-sm col me-2"/>
        <input placeholder="Password" id="password" class="form-control-sm col" input type="password" />
        <button onClick={performLogin} class="btn btn-primary col-2 ms-2">Login</button>
      </div>
      </form>
    
  )
 
}
function LoggedIn() {
  const [dataFromServer, setDataFromServer] = useState("Loading...")
  
  useEffect(() => { facade.fetchData().then(data=> setDataFromServer(data.msg));
  }, [])
 
  return (
    <div>
      <h2></h2>
      <NavDropdown title={dataFromServer} id="navbarScrollingDropdown">
      <NavDropdown.Item href="#action3">Profil</NavDropdown.Item>
          <NavDropdown.Item href="#action4">activity log</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Search history</NavDropdown.Item>
          <NavDropdown.Item href="logg">Logout</NavDropdown.Item>
         
        </NavDropdown>
    </div>
  )
 
}
 
function Login() {
  const [loggedIn, setLoggedIn] = useState(false)
 
  const logout = () => { facade.logout()
    setLoggedIn(false)
  } 
  const login = (user, pass) => {facade.login(user,pass)
    .then(res =>setLoggedIn(true));
   } 
 
  return (
    <nav className="logg">
      {!loggedIn ? (<LogIn login={login} />) :
        (<div>
          <LoggedIn />
          {/* <button onClick={logout}  class="btn btn-primary">Logout</button> */}
        </div>)}
    </nav>
  )
 
}
export default Login;
