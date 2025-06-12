import React, { useState } from 'react';
import projects from '../data/projects';
import '../styles/apps/ProjectsWindow.css';

/**
 * ProjectsWindow component displays a list of projects
 */
const ProjectsWindow: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  
  // Extract unique categories from projects
  const categories = ['All', ...new Set(projects.map(project => project.category))];
  
  // Filter projects based on selected category
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="projects-window">
      <div className="projects-header">
        <h1>My Projects</h1>
        <p>A collection of my recent work and side projects</p>
      </div>
      
      <div className="category-filter">
        {categories.map(category => (
          <button 
            key={category}
            className={`category-button ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      
      <div className="projects-grid">
        {filteredProjects.map(project => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.name} />
            </div>
            <div className="project-info">
              <h3>{project.name}</h3>
              <p className="project-category">{project.category}</p>
              <p className="project-description">{project.description}</p>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
      
      {filteredProjects.length === 0 && (
        <div className="no-projects">
          <p>No projects found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default ProjectsWindow;