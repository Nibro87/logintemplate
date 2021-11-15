import axios from "axios";

const API_URL = "http://localhost:8080/devops_starter_war_exploded";

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