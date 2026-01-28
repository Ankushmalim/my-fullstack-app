import React, { useState } from "react";
import UserService from "../services/UserService";

const UserForm = ({ onUserSaved }) => {
    const [username, setUsername] = useState("");
    const [gender, setGender] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!username || !gender || !email || !password) {
            alert("Please fill all fields");
            return;
        }

        const user = {
            username,
            gender,
            email,
            password
        };

        try {
            await UserService.saveUser(user);
            alert("User saved successfully");

            setUsername("");
            setGender("");
            setEmail("");
            setPassword("");

            onUserSaved && onUserSaved();
        } catch (error) {
            alert("Error saving user");
            console.error(error);
        }
    };

    return (
        <div>
            <h3>User Registration</h3>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <br /><br />

                <input
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br /><br />

                <input
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br /><br />

                <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                >
                    <option value="">Select Gender</option>
                    <option value="MALE">Male</option>
                    <option value="FEMALE">Female</option>
                    <option value="OTHERS">Others</option>
                </select>
                <br /><br />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default UserForm;
