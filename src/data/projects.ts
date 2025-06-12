import type { Project } from '../types';

/**
 * Array of projects to be displayed in the Projects window
 */
const projects: Project[] = [
  {
    id: 'project1',
    name: 'Portfolio Website',
    description: 'A macOS-inspired portfolio website built with React and TypeScript.',
    image: 'https://via.placeholder.com/300x200?text=Portfolio',
    link: 'https://github.com/yourusername/portfolio-mac',
    category: 'Web Development'
  },
  {
    id: 'project2',
    name: 'E-commerce Platform',
    description: 'A full-stack e-commerce platform with React, Node.js, and MongoDB.',
    image: 'https://via.placeholder.com/300x200?text=E-commerce',
    link: 'https://github.com/yourusername/ecommerce-platform',
    category: 'Full Stack'
  },
  {
    id: 'project3',
    name: 'Weather App',
    description: 'A weather application that displays current weather and forecasts.',
    image: 'https://via.placeholder.com/300x200?text=Weather+App',
    link: 'https://github.com/yourusername/weather-app',
    category: 'Web Development'
  },
  {
    id: 'project4',
    name: 'Task Manager',
    description: 'A task management application with drag-and-drop functionality.',
    image: 'https://via.placeholder.com/300x200?text=Task+Manager',
    link: 'https://github.com/yourusername/task-manager',
    category: 'Web Development'
  },
  {
    id: 'project5',
    name: 'Machine Learning Model',
    description: 'A machine learning model for image classification using TensorFlow.',
    image: 'https://via.placeholder.com/300x200?text=ML+Model',
    link: 'https://github.com/yourusername/ml-image-classifier',
    category: 'Machine Learning'
  }
];

export default projects;