import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink to="home" >Home</NavLink>
      <NavLink to="shop">Shop</NavLink>
      <NavLink to="blog">Blog</NavLink>
      <NavLink to="about">About</NavLink>
      <NavLink to="contact">Contact</NavLink>
    </div>
  );
};

export default Navbar;