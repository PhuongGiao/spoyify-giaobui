import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <div className="Header">
      <a
        style={{ textDecoration: "none", color: "grey", fontWeight: "700" }}
        href=""
      >
        SIGN UP
      </a>
      <a className="spe" href="">
        LOG IN
      </a>
    </div>
  );
};

export default Header;
