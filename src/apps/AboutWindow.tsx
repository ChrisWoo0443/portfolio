import React from 'react';
import '../styles/apps/AboutWindow.css';

/**
 * AboutWindow component displays information about the portfolio owner
 */
const AboutWindow: React.FC = () => {
  return (
    <div className="about-window">
      <div className="about-header">
        <img 
          src="https://via.placeholder.com/150" 
          alt="Profile" 
          className="profile-image"
        />
        <h1>John Doe</h1>
        <h2>Full Stack Developer</h2>
      </div>
      
      <div className="about-content">
        <section className="about-section">
          <h3>About Me</h3>
          <p>
            Hi there! I'm a passionate full-stack developer with expertise in React, TypeScript, 
            Node.js, and modern web technologies. I love creating intuitive and performant user 
            experiences that solve real-world problems.
          </p>
          <p>
            When I'm not coding, you can find me hiking, reading sci-fi novels, or experimenting 
            with new technologies. I'm always eager to learn and grow as a developer.
          </p>
        </section>
        
        <section className="about-section">
          <h3>Skills</h3>
          <div className="skills-container">
            <div className="skill-category">
              <h4>Frontend</h4>
              <ul>
                <li>React</li>
                <li>TypeScript</li>
                <li>HTML/CSS</li>
                <li>Framer Motion</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
            <div className="skill-category">
              <h4>Backend</h4>
              <ul>
                <li>Node.js</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>PostgreSQL</li>
                <li>RESTful APIs</li>
              </ul>
            </div>
            <div className="skill-category">
              <h4>Tools</h4>
              <ul>
                <li>Git</li>
                <li>Docker</li>
                <li>AWS</li>
                <li>Jest</li>
                <li>CI/CD</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section className="about-section">
          <h3>Experience</h3>
          <div className="experience-item">
            <h4>Senior Frontend Developer</h4>
            <p className="company">Tech Solutions Inc. (2020 - Present)</p>
            <p>
              Leading frontend development for enterprise applications, implementing 
              modern React patterns, and mentoring junior developers.
            </p>
          </div>
          <div className="experience-item">
            <h4>Full Stack Developer</h4>
            <p className="company">Digital Innovations (2018 - 2020)</p>
            <p>
              Developed and maintained full-stack web applications using React, Node.js, 
              and MongoDB. Implemented responsive designs and RESTful APIs.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutWindow;