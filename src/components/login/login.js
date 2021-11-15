import React, { useState,useEffect } from "react"
import { Row } from "react-bootstrap";
import facade from "./loginFacade";
import './style.css' 


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
      <h3>{dataFromServer}</h3>
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
    <nav>
      {!loggedIn ? (<LogIn login={login} />) :
        (<div>
          <LoggedIn />
          <button onClick={logout}>Logout</button>
        </div>)}
    </nav>
  )
 
}
export default Login;
