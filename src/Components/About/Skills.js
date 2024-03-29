import React, { useRef, useState, useEffect } from 'react';
import skillsData from '../Data/skills.json'; // Note the renamed import
import useContainerDimensions from '../Hooks/useContainerDimesions';
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

