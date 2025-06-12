import React from 'react';
import { motion } from 'framer-motion';
import { useWindowManager } from '../../context/WindowManagerContext';
import type { App } from '../../types';
import './DockIcon.css';

interface DockIconProps {
  app: App;
}

/**
 * DockIcon component that displays an icon in the dock
 */
const DockIcon: React.FC<DockIconProps> = ({ app }) => {
  const { openWindow } = useWindowManager();
  
  const handleClick = () => {
    if (app.externalLink) {
      window.open(app.externalLink, '_blank');
    } else {
      openWindow(app.id);
    }
  };
  
  return (
    <motion.div 
      className="dock-icon"
      whileHover={{ y: -10, scale: 1.2 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        type: 'spring', 
        stiffness: 300, 
        damping: 20,
        mass: 1
      }}
    >
      <img 
        src={app.icon} 
        alt={app.name} 
        className="dock-icon-image"
      />
      <span className="dock-icon-label">{app.name}</span>
    </motion.div>
  );
};

export default DockIcon;