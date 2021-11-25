import axios from "axios";
import { SERVER_URL } from "../settings";

const API_URL = "http://localhost:8080/CA2_war_exploded";

class AuthService {
  

  register(username, email, password) {
    return axios.post(API_URL + "/api/info/signup", {
      username,
      email,
      password
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();