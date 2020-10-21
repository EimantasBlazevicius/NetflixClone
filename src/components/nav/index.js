import image from "./images/F.png";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import UserContext from "../../context/userContext";

function Nav({ onSignOut }) {
  const { isLoggedIn } = useContext(UserContext);
  return (
    <nav>
      <Link to="/" className="navbar-brand">
        <img src={image} width="20" height="30" alt="" className="m-2" />
      </Link>

      {!isLoggedIn ? (
        <Link to="/login" className="nav-item float-right m-2">
          <button className="btn btn-danger">Sign In</button>
        </Link>
      ) : (
        <button
          className="btn btn-danger float-right m-2 nav-item"
          onClick={onSignOut}
        >
          Sign Out
        </button>
      )}
    </nav>
  );
}
export default Nav;
