import React from "react";
import { Link, NavLink } from "react-router-dom";
function Header() {
  return (
    <div className="header w-full h-[70px] fixed top-0 left-0 bg-blue-500 text-white flex items-center px-4 py-6 justify-between">
      <Link
        to={"/"}
        className="header-link text-3xl font-semibold font-sans text-white no-underline cursor-pointer hover:opacity-75 ease-in-out"
      >
        Evently
      </Link>
      <div className="flex items-center justify-between gap-2">
        <Link
          to={"/"}
          className="header-link text-white decoration-none no-underline cursor-pointer hover:opacity-75 ease-in-out text-md"
        >
          Home
        </Link>
        <Link
          to={"/dashboard"}
          className="header-link cursor-pointer text-white no-underline hover:opacity-75 ease-in-out text-md"
        >
          Dashboard
        </Link>
        <Link
          to={"/contact-us"}
          className="header-link cursor-pointer text-white no-underline hover:opacity-75 ease-in-out text-md"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}

export default Header;
