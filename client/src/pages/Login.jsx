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
      // console.log(response);
    } catch (error) {
      alert("Invalid credentials", error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-[30vw] rounded border shadow px-6 py-8 mx-auto mt-[200px]">
      <h4>Login</h4>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Enter Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter Email Here"
            value={email}
            className="px-4 py-2 border"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password">Enter Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter Password Here"
            value={password}
            className="px-4 py-2 border"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="px-4 py-2 bg-blue-500 text-white cursor-pointer rounded"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
