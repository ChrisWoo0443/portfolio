import React from 'react';
import { motion } from 'framer-motion';
import WindowControls from './WindowControls';
import './WindowHeader.css';

interface WindowHeaderProps {
  title: string;
  onClose: () => void;
  onMinimize: () => void;
  onDrag: (e: any, info: any) => void;
  onDragEnd?: (e: any, info: any) => void;
  isActive: boolean;
}

/**
 * WindowHeader component that displays the window title and controls
 */
const WindowHeader: React.FC<WindowHeaderProps> = ({ 
  title, 
  onDrag, 
  onDragEnd, 
  onClose, 
  onMinimize, 
  isActive 
}) => {
  return (
    <motion.div
      className={`window-header ${isActive ? 'active' : ''}`}
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragElastic={0}
      dragMomentum={false}
      onDrag={onDrag}
      onDragEnd={onDragEnd}
    >
      <WindowControls onClose={onClose} onMinimize={onMinimize} />
      <div className="window-title">{title}</div>
      <div className="window-header-spacer" /> {/* Empty space to balance the header */}
    </motion.div>
  );
};

export default WindowHeader;