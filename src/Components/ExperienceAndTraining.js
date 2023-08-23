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
            date="2022 - 2023"
            dateClassName="custom-date-color"
            iconStyle={{ background: "#e9d35b", color: "#fff" }}
            icon={<WorkSharpIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Starsbucks
            </h3>
            <h5 style={{ color: "black" }}> Barista</h5>
            <p style={{ color: "black" }}>- Prepared and serves a variety of coffee and related beverages while providing excellent customer service in a fast-paced environment.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2019 - 2020"
            dateClassName="custom-date-color"
            iconStyle={{ background: "#e9d35b", color: "#fff" }}
            icon={<WorkSharpIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Perfect Active Solutions Pvt. Ltd, Kathmandu, Nepal
            </h3>
            <h5 style={{ color: "black" }}>Perfect Active Solutions Pvt. Ltd. is an IT Solutions Provider (Hardware/ Network and a Software Development).</h5>
            <p style={{ color: "black" }}>- Designed and implemented user interfaces and API for MIS systems using React JS.</p>
            <p style={{ color: "black" }}>- Used web language HTML, JavaScript, CSS in order to build web applications SQL to store web application data.</p>
            <p style={{ color: "black" }}>- Revised, update, refactored and debugged code and further improved existing Software.</p>
            <p style={{ color: "black" }}>- Tested and deployed applications and systems.</p>



          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    );
  }
}

export default ExperienceAndTraining;