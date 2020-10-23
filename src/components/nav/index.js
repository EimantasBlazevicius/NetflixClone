import image from "./images/F.png";
import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import { useSelector,useDispatch } from 'react-redux';

function Nav() {
  const isLoggedIn = useSelector(store => store.isLoggedIn)
  const dispatch = useDispatch()
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
          onClick={dispatch({type:"SIGN_OUT"})}
        >
          Sign Out
        </button>
      )}
    </nav>
  );
}
export default Nav;
