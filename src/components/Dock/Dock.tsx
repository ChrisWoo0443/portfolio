import React from 'react';
import { motion } from 'framer-motion';
import DockIcon from './DockIcon';
import type { App } from '../../types';
import './Dock.css';

interface DockProps {
  apps: App[];
}

/**
 * Dock component that displays the macOS-style dock at the bottom of the screen
 */
const Dock: React.FC<DockProps> = ({ apps }) => {
  return (
    <motion.div 
      className="dock-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <motion.div 
        className="dock"
        initial={{ opacity: 0.6, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ 
          type: 'spring',
          stiffness: 100,
          damping: 15,
          delay: 0.7
        }}
        whileHover={{ scale: 1.02 }}
      >
        {apps.map(app => (
          <DockIcon key={app.id} app={app} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Dock;