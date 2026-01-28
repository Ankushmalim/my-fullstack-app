import axios from "axios";

const BASE_URL = "http://localhost:8080/api/users";

class UserService {
    saveUser(user) {
        return axios.post(BASE_URL, user);
    }

    getAllUsers() {
        return axios.get(BASE_URL);
    }
}

const userService = new UserService();
export default userService;
