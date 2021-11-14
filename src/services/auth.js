import axios from "axios";

const API_URL = "http://localhost:8080/api/info";

class AuthService {
  

  register(username, email, password) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('users'));;
  }
}

export default new AuthService();