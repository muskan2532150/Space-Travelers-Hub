import React from "react";
import { NavLink, Link } from "react-router-dom";
import planetImage from "../assets/planet.png";

const NavBar = () => {
  return (
    <header className="header">
      <nav className="nav-bar">
        <Link to="/" className="logo">
          <img src={planetImage} alt="planet" />
          <h1>Space Traveler's Hub</h1>
        </Link>

        <div className="nav-links">
          <NavLink to="/rocket" className={({isActive}) => (isActive ? "active" : "")}>Rockets</NavLink>
          <NavLink to="missions" className={({isActive}) => (isActive ? "active" : "")}>Missions</NavLink>
          <NavLink to="profile" className={({isActive}) => (isActive ? "active" : "")}>My Profile</NavLink>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
