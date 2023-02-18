import "./HeroImgStyles.css";
import React from "react";
import intobg from "../assets/intobg.jpg";
import { Link } from "react-router-dom";
const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={intobg} alt="intobg" />
      </div>
      <div className="content">
        <p>HI, I AM A </p>
        <h1>FULL-STACK DEVELOPER</h1>

        <div>
          <Link to={"/Project"} className="btn custom-btn">
            Projects
          </Link>
          <Link to={"/Contact"} className="btn custom-btn">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Heroimg;
