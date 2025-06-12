import React from 'react';
import Silk from './Silk';
import Folder from './Folder';
import type { App } from '../../types';
import './Desktop.css';

interface DesktopProps {
  apps: App[];
  wallpaper?: string; // Kept for backward compatibility
}

/**
 * Desktop component that displays the background with Silk effect
 * Desktop icons have been removed as requested
 */
const Desktop: React.FC<DesktopProps> = () => {
  return (
    <div className="desktop">
      {/* Using Silk background component */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
        <Silk 
          speed={5} 
          scale={1} 
          color="#706956" // 706956 for gold / #7B7481 for default
          noiseIntensity={0} 
          rotation={0} 
        />
      </div>
      
      {/* Desktop Icons container is kept but icons are not rendered */}
      <div className="desktop-icons-container">
        {/* Desktop icons have been removed as requested */}
        {/* Folder component positioned in the top right */}
        <div style={{ position: 'absolute', top: '20px', right: '20px' }}>
          <Folder size={0.5} color="#7ecdfa" className="custom-folder" />
        </div>
      </div>
    </div>
  );
};

export default Desktop;