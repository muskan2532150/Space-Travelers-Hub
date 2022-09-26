import React from "react";
import { Link } from "react-router-dom";
import planetImage from "../assets/planet.png";

const NavBar = () => {
  return (
    <header>
      <nav className="nav-bar">
        <Link to="/">
          <img src={planetImage} alt="planet" />
          <h1>Space Traveler's Hub</h1>
        </Link>

        <div className="nav-links">
          <Link to="/">Rockets</Link>
          <Link to="missions">Missions</Link>
          <Link to="profile">My Profile</Link>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
