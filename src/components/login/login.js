import React, { useState,useEffect } from "react"
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
    <div>
     
      <form onChange={onChange} >
        <input placeholder="User Name" id="username" />
        <input placeholder="Password" id="password" />
        <button onClick={performLogin}>Login</button>
      </form>
    </div>
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
