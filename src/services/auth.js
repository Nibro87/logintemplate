import axios from "axios";
import  SERVER_URL  from "../settings";



class AuthService {
  

  register(username, email, password) {
    return axios.post(SERVER_URL + "/api/info/signup", {
      username,
      email,
      password
    });
  }

 
}

export default new AuthService();