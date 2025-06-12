import React from 'react';
import type { App } from '../types';


// Import app components
// Note: These components will be implemented later
const AboutWindow: React.FC = () => <div>About Me Content</div>;
const ContactsWindow: React.FC = () => <div>Contacts Content</div>;

// Resume component using iframe to display Google Drive document
const ResumeWindow: React.FC = () => {
  const googleDriveFileUrl = 'https://drive.google.com/file/d/1nk7WZHgoqA-GiNROld8x6Bj4j-MHll3p/preview';
  
  return (
    <div style={{ 
      width: '100%', 
      height: '100%', 
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden' 
    }}>
      <iframe 
        src={googleDriveFileUrl}
        style={{ 
          width: '100%', 
          height: '100%', 
          border: 'none',
          flexGrow: 1,
          minHeight: '700px'
        }}
        title="Resume"
        allowFullScreen
        frameBorder="0"
      />
    </div>
  );
};


import contactsIcon from '../assets/icons/contacts.png';
import linkedinIcon from '../assets/icons/linkedin.png';
import githubIcon from '../assets/icons/github.png';
import resumeIcon from '../assets/icons/resume.png';
import instagramIcon from '../assets/icons/instagram.png'
import aboutIcon from '../assets/icons/about.png'


/**
 * Array of applications available in the system
 */
const apps: App[] = [
  {
    id: 'about',
    name: 'About Me',
    icon: aboutIcon,
    component: AboutWindow
  },
  {
    id: 'resume',
    name: 'Resume',
    icon: resumeIcon,
    component: ResumeWindow
  },
  {
    id: 'contacts',
    name: 'Contacts',
    icon: contactsIcon,
    component: ContactsWindow
  },
  {
    id: 'github',
    name: 'GitHub',
    icon: githubIcon,
    component: () => {
      window.open('https://github.com/ChrisWoo0443', '_blank');
      return null;
    },
    externalLink: 'https://github.com/ChrisWoo0443' // Replace with your GitHub username
  },
  {
    id: 'linkedin',
    name: 'Linkedin',
    icon: linkedinIcon,
    component: () => {
      window.open('https://linkedin.com/in/yourusername', '_blank');
      return null;
    },
    externalLink: 'https://linkedin.com/in/yourusername'
  },
  {
    id: 'instagram',
    name: 'Instagram',
    icon: instagramIcon,
    component: () => {
      window.open('https://instagram.com/chris.woo04', '_blank');
      return null;
    },
    externalLink: 'https://instagram.com/chris.woo04'
  }
];

export default apps;