import axios from "axios";
import { SERVER_URL } from "../settings";

const API_URL = SERVER_URL;

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