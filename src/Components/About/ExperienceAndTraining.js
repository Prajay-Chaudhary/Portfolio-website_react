import React from "react";
import { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolSharpIcon from '@mui/icons-material/SchoolSharp';
import WorkSharpIcon from '@mui/icons-material/WorkSharp';
import "./ExperienceAndTraining.css";

class ExperienceAndTraining extends Component {
  render() {
    return (
      <div className="experience">
        <VerticalTimeline lineColor="#00ff00">
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2023 - 2025"
            dateClassName="custom-date-color"
            iconStyle={{ background: "#00ff00", color: "black" }}
            icon={<SchoolSharpIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Sup de Vinci - école d'informatique
            </h3>
            <h5 style={{ color: "black" }}> Level 7 certified title registered with the RNCP</h5>
            <p style={{ color: "black" }}> Mastère Spécialisation Développement <br />Développeur Full Stack</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2022 - 2023"
            dateClassName="custom-date-color"
            iconStyle={{ background: "#00ff00", color: "black" }}
            icon={<SchoolSharpIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Openclassrooms
            </h3>
            <h5 style={{ color: "black" }}> Level 6 certified title registered with the RNCP</h5>
            <p style={{ color: "black" }}> Développeur Full Stack</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2022 - 2023"
            dateClassName="custom-date-color"
            iconStyle={{ background: "#00ff00", color: "black" }}
            icon={<SchoolSharpIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Lovely Professional University
            </h3>
            <h5 style={{ color: "black" }}> Computer science and engineering</h5>
            <p style={{ color: "black" }}> Grade: A+</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2021"
            dateClassName="custom-date-color"
            iconStyle={{ background: "#e9d35b", color: "#fff" }}
            icon={<WorkSharpIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Perfect Active Solutions Pvt. Ltd, Kathmandu, Nepal
            </h3>
            <h5 style={{ color: "black" }}>Full Stack Web Developer</h5>
            <p style={{ color: "black" }}>- Create robust, well-documented APIs</p>
            <p style={{ color: "black" }}>- Data Management</p>
            <p style={{ color: "black" }}>- Using Modern Front-End Tools React Js and tailwind CSS to Create Attractive Web Applications.</p>
            <p style={{ color: "black" }}>- Implement security best practices to protect user data and prevent vulnerabilities.</p>
            <p style={{ color: "black" }}>- Optimization, review and debugging of code</p>
            <p style={{ color: "black" }}>- UX/UI collaboration for responsive interfaces.</p>
            <p style={{ color: "black" }}>- Web applications tested and deployed to ensure functionality and reliability.</p>
            <p style={{ color: "black" }}>- Performance optimization.</p>
            <p style={{ color: "black" }}>- Background jobs handled asynchronously.</p>
            <p style={{ color: "black" }}>- Development of clean and modular code.</p>
            <p style={{ color: "black" }}>- Participation in agile development.</p>
            <p style={{ color: "black" }}>-Version control for collaborative development (Git).</p>
            <p style={{ color: "black" }}>-User integration and training.</p>
            <p style={{ color: "black" }}>-Analysis of customer needs and search for solutions.</p>
            <p style={{ color: "black" }}>-Integration of third-party APIs.</p>



          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    );
  }
}

export default ExperienceAndTraining;