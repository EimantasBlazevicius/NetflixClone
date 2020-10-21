import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="jumbotron">
      <div className="hero-height">
        <h1 className="display-4 text-white text-center hero-title">
          Wanna more Content?
        </h1>
        <p className="lead text-center">
          <Link className="btn btn-danger btn-lg" to="/register" role="button">
            Get Access
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Hero;
