import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerApi } from "../service/authService";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("form submitted");
    try {
      await registerApi({ email, password });
      alert("Signup successful!");
      navigate("/dashboard");
    } catch (error) {
      alert("Invalid credentials");
    }
  };
  return (
    <div className="flex flex-col items-center justify-center w-[30vw] rounded-lg border shadow px-6 py-8 mx-auto mt-[200px]">
      <h4>Register</h4>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Enter Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter Email Here"
            value={email}
            required
            className="px-4 py-2 border w-full"
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
            required
            className="px-4 py-2 border w-full"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="px-4 py-2 bg-blue-500 text-white cursor-pointer rounded"
          type="submit"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
