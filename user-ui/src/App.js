import React, { useEffect, useState } from "react";
import UserForm from "./components/UserForm";
import UserTable from "./components/UserTable";
import UserService from "./services/UserService";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await UserService.getAllUsers();
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="container">
      <h2>React + Spring Boot + MySQL</h2>

      <UserForm onUserSaved={fetchUsers} />

      <br />

      <button onClick={fetchUsers}>Fetch Users</button>

      <br />
      <br />

      <UserTable users={users} />
    </div>
  );
}

export default App;
