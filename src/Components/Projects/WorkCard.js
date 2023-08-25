import "./WorkCardStyles.css";
import React from "react";

const WorkCard = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="project-1" />
      <h2 className="Project-title">{props.title}</h2>
      <div className="pro-details">
        <p>{props.text}</p>
        <div className="pro-btn">
          <div>
            <a
              href={props.link}
              className="btn custom-btn"
              target={"_blank"}
            >
              Source Code
            </a>
          </div>
          <div>
              <a
               href={props.liveLink}
               className="btn custom-btn"
               target={"_blank"}
            >
              See Live
              </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
