import React from 'react';
import '../styles/apps/ResumeWindow.css';

/**
 * ResumeWindow component displays a professional resume
 */
const ResumeWindow: React.FC = () => {
  return (
    <div className="resume-window">
      <div className="resume-header">
        <h1>John Doe</h1>
        <p className="resume-title">Full Stack Developer</p>
        <div className="resume-contact">
          <p>Email: john.doe@example.com</p>
          <p>Phone: (123) 456-7890</p>
          <p>Location: San Francisco, CA</p>
          <p>LinkedIn: linkedin.com/in/johndoe</p>
          <p>GitHub: github.com/johndoe</p>
        </div>
      </div>

      <div className="resume-section">
        <h2>Summary</h2>
        <p>
          Experienced Full Stack Developer with over 5 years of professional experience 
          specializing in React, Node.js, and cloud technologies. Passionate about creating 
          efficient, scalable, and user-friendly applications with clean, maintainable code.
        </p>
      </div>

      <div className="resume-section">
        <h2>Skills</h2>
        <div className="skills-container">
          <div className="skill-category">
            <h3>Frontend</h3>
            <ul>
              <li>React.js / Redux</li>
              <li>TypeScript</li>
              <li>HTML5 / CSS3</li>
              <li>Responsive Design</li>
              <li>Jest / Testing Library</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Backend</h3>
            <ul>
              <li>Node.js / Express</li>
              <li>Python / Django</li>
              <li>RESTful APIs</li>
              <li>GraphQL</li>
              <li>MongoDB / PostgreSQL</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>DevOps & Tools</h3>
            <ul>
              <li>AWS / Azure</li>
              <li>Docker / Kubernetes</li>
              <li>CI/CD Pipelines</li>
              <li>Git / GitHub</li>
              <li>Agile / Scrum</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="resume-section">
        <h2>Experience</h2>
        
        <div className="experience-item">
          <div className="experience-header">
            <h3>Senior Frontend Developer</h3>
            <p className="company">Tech Innovations Inc.</p>
            <p className="date">January 2021 - Present</p>
          </div>
          <ul>
            <li>Led the frontend development of a customer-facing portal that improved user engagement by 35%</li>
            <li>Implemented responsive design principles, ensuring seamless experience across all devices</li>
            <li>Mentored junior developers and conducted code reviews to maintain high code quality</li>
            <li>Collaborated with UX/UI designers to implement intuitive user interfaces</li>
          </ul>
        </div>

        <div className="experience-item">
          <div className="experience-header">
            <h3>Full Stack Developer</h3>
            <p className="company">Digital Solutions LLC</p>
            <p className="date">March 2018 - December 2020</p>
          </div>
          <ul>
            <li>Developed and maintained multiple web applications using React, Node.js, and MongoDB</li>
            <li>Implemented authentication and authorization systems using JWT and OAuth</li>
            <li>Optimized database queries, resulting in a 40% improvement in application performance</li>
            <li>Participated in agile development processes, including daily stand-ups and sprint planning</li>
          </ul>
        </div>

        <div className="experience-item">
          <div className="experience-header">
            <h3>Junior Web Developer</h3>
            <p className="company">WebCraft Studios</p>
            <p className="date">June 2016 - February 2018</p>
          </div>
          <ul>
            <li>Built responsive websites for clients across various industries</li>
            <li>Collaborated with the design team to implement pixel-perfect UI components</li>
            <li>Assisted in troubleshooting and fixing bugs in existing applications</li>
            <li>Participated in client meetings to gather requirements and provide technical insights</li>
          </ul>
        </div>
      </div>

      <div className="resume-section">
        <h2>Education</h2>
        <div className="education-item">
          <h3>Bachelor of Science in Computer Science</h3>
          <p className="institution">University of Technology</p>
          <p className="date">2012 - 2016</p>
          <p>Graduated with Honors, GPA: 3.8/4.0</p>
        </div>
      </div>

      <div className="resume-section">
        <h2>Certifications</h2>
        <ul className="certifications-list">
          <li>AWS Certified Developer - Associate</li>
          <li>Microsoft Certified: Azure Developer Associate</li>
          <li>MongoDB Certified Developer</li>
        </ul>
      </div>

      <div className="resume-actions">
        <button className="download-button">Download PDF</button>
        <button className="print-button">Print Resume</button>
      </div>
    </div>
  );
};

export default ResumeWindow;