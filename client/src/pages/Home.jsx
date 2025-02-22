import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="w-[80vw] h-full ml-34 flex items-center justify-between gap-34 mt-[200px]">
      <div className="w-[60%] flex flex-col items-start justify-center gap-12">
        <p className="text-5xl font-mono w-full text-wrap">
          Event Management Web App
        </p>
        <ul>
          <li className="mt-4 max-w-[1/2] text-wrap text-md text-gray-600">
            Explore the magic of our application.
          </li>
          <li>A go-to solution for managing amazing events effortlessly.</li>
          <li>
            From easy sign-ups to registering and managing event schedules, our
            user-friendly platform has everything you need for a flawless
            experience.
          </li>
          <li>
            With powerful features, trust our system to handle the details, and
            let's bring your event vision to life!!!
          </li>
          <li>
            A new Journey of <b> Event Management</b> awaits you
          </li>
        </ul>
        <Link
          to={"/login"}
          className="started-btn no-underline min-w-[150px] text-center text-white hover:bg-white border-2 border-blue-500 px-6 py-2 hover:shadow-2xl rounded-sm"
        >
          Get Started
        </Link>
      </div>
      <div className="border px-8 py-6 flex flex-col items-start justify-center rounded-xl shadow m-auto">
        <p className="text-start my-2">Already have an account Login Here</p>
        <Link
          className="login-btn m-auto w-full py-2 min-w-[150px] mb-4 bg-white text-blue-500 border-2 text-center border-blue-500 cursor-pointer rounded"
          to={"/login"}
        >
          Login
        </Link>
        <p className="text-start my-2">Don't have an account register Here</p>
        <Link
          className="register-btn m-auto w-full py-2 min-w-[150px] mb-4 bg-white text-blue-500 border-2 text-center border-blue-500 cursor-pointer rounded"
          to={"/register"}
        >
          Register
        </Link>
      </div>
    </div>
  );
}

export default Home;
