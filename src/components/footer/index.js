import React from "react";
import "../../App.css";

function Footer() {
  return (
    <footer className="footer bg-secondary">
      <div className="row">
        <div className="col">
          <span className="text-light m-2">
            Some awesome test about copyRghts
          </span>
          <span
            role="img"
            aria-label="label"
            className="text-light m-2 float-right"
          >
            💳
          </span>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
