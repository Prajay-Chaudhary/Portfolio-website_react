import "./WorkCardStyles.css";
import React from "react";
import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="project-1" />
      <h2 className="Project-title">{props.title}</h2>
      <div className="pro-details">
        <p>{props.text}</p>
        <div className="pro-btn">
          <a
            href="https://github.com/Prajay-Chaudhary/Project-3.git"
            className="btn"
          >
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
