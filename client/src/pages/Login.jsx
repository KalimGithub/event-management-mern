import React, { useState } from "react";
import { loginApi } from "../service/authService";
import { useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthProvider";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [authUser, setAuthUser] = useAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("form submitted");
    try {
      const response = await loginApi({ email, password });
      if (response.data) {
        alert("Login successful!");
        // setAuthUser(response.data);
        navigate("/dashboard");
      } else {
        alert("Invalid Credentials");
      }
      console.log(response);
    } catch (error) {
      alert("Invalid credentials", error.message);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter Email Here"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Password Here"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
