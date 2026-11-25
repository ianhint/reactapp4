import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav>
        <Link to="/">Home </Link> <br />
        <Link to="/about">About </Link> <br />
        <Link to="/contact">Contact </Link>
        <Link to="/cars">Cars </Link>
      </nav>
    </>
  );
}

export default Navbar;
