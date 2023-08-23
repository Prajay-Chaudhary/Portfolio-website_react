// import React from 'react'
// import "./Skills.css";

// const Skills = () => {
//   return (
//     <div className="skills">
//       <h1> Skills</h1>
//       <ol className="list">
//         <li className="item">
//           <h2>Back-End</h2>
//           <span>
//             Python, Ruby, Ruby on Rails, Java Spring, API development RESTful API, C/C++,
//             MySQL, AWS S3
//           </span>
//         </li>
//         <li className="item">
//           <h2> Front-End</h2>
//           <span>
//             ReactJS, Redux, Context API, Javascript, HTML, CSS, NPM,
//             BootStrap, Yarn, TailwindCSS, StyledComponents, Chakra UI
//           </span>
//         </li>
//         <li className="item">
//           <h2>Database</h2>
//           <span>MS SQL, PostgreSQL, SQL Server, NoSQL </span>
//         </li>
//         <li className="item">
//           <h2>Tools</h2>
//           <span>
//             Postman,
//             Git,
//             Visual Studio,
//             NetBeans, GitHub </span>
//         </li>
//       </ol>
//     </div>
//   )
// }

// export default Skills





import React, { useRef, useState, useEffect } from 'react';
import skillsData from '../Components/Data/skills.json'; // Note the renamed import
import useContainerDimensions from './Hooks/useContainerDimesions';
import './Skills.css';

const Skills = () => {
  const skillsWrapper = useRef();
  const { width } = useContainerDimensions(skillsWrapper);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const boundingClientRect = skillsWrapper.current.getBoundingClientRect();
      setIsVisible(boundingClientRect.top < window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check visibility on initial render

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`skills-wrapper ${isVisible ? 'visible' : ''}`} ref={skillsWrapper}>
      <h1 style={{ textAlign: "center", marginBottom: "100px", fontSize: "60px" }}>Skills</h1>
      <ul className="skills">
        {skillsData.skills.map((skill) => { // Access the skills array correctly
          return (
            <li className="skill-bar-wrapper" key={skill.skillName}>
              <div
                className="skill-bar"
                style={{
                  width: isVisible ? `${width * (Number(skill.amount) / 100)}px` : '1px',
                  transitionDelay: isVisible ? `${1 + skill.id / 10}s` : '0s',
                }}
              ></div>
              <div className="skill-name">{skill.skillName}</div>
              <div className="skill-percentage">{`${skill.amount}%`}</div> {/* Display the percentage */}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Skills;

