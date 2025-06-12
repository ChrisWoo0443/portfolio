import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WindowHeader from './WindowHeader';
import WindowContent from './WindowContent';
import { useWindowManager } from '../../context/WindowManagerContext';
import useDraggable from '../../hooks/useDraggable';
import useResizable from '../../hooks/useResizable';
import useWindowFocus from '../../hooks/useWindowFocus';
import type { Window as WindowType, App } from '../../types';
import './Window.css';

interface WindowProps {
  window: WindowType;
  app: App;
  isActive: boolean;
}

/**
 * Window component that displays an application window
 */
const Window: React.FC<WindowProps> = ({ window, app, isActive }) => {
  const { 
    focusWindow, 
    closeWindow, 
    minimizeWindow, 
    updateWindowPosition,
    updateWindowSize
  } = useWindowManager();
  
  // Use custom hooks for dragging, resizing, and focus
  const { position, handleDrag, handleDragEnd } = useDraggable({
    initialPosition: window.position,
    onDragEnd: (position) => updateWindowPosition(window.id, position)
  });
  
  const { size, handleResize, handleResizeEnd } = useResizable({
    initialSize: window.size,
    minSize: { width: 300, height: 200 },
    maxSize: { width: 1200, height: 800 },
    onResizeEnd: (size) => updateWindowSize(window.id, size)
  });
  
  const { handleFocus } = useWindowFocus({
    id: window.id,
    initialZIndex: window.zIndex,
    isActive,
    onFocus: focusWindow
  });
  
  // Handle resize from different directions
  const handleResizeRight = (e: MouseEvent | TouchEvent | PointerEvent, info: any) => {
    handleResize(e, info, 'right');
  };
  
  const handleResizeBottom = (e: MouseEvent | TouchEvent | PointerEvent, info: any) => {
    handleResize(e, info, 'bottom');
  };
  
  const handleResizeBottomRight = (e: MouseEvent | TouchEvent | PointerEvent, info: any) => {
    handleResize(e, info, 'bottom-right');
  };
  
  // Handle window close
  const handleClose = () => {
    closeWindow(window.id);
  };
  
  // Handle window minimize
  const handleMinimize = () => {
    minimizeWindow(window.id);
  };
  
  // If window is minimized, don't render it
  if (window.isMinimized) {
    return null;
  }
  
  return (
    <AnimatePresence>
      <motion.div 
        className="window"
        style={{
          position: 'absolute',
          left: position.x,
          top: position.y,
          width: size.width,
          height: size.height,
          borderRadius: '8px',
          boxShadow: isActive 
            ? '0 10px 30px rgba(0, 0, 0, 0.3)' 
            : '0 5px 15px rgba(0, 0, 0, 0.1)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          zIndex: window.zIndex,
          border: isActive ? '1px solid rgba(0, 122, 255, 0.5)' : '1px solid rgba(0, 0, 0, 0.1)',
        }}
        onClick={handleFocus}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.2 }}
      >
        <WindowHeader 
          title={app.name}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          onClose={handleClose}
          onMinimize={handleMinimize}
          isActive={isActive}
        />
        <WindowContent>
          {app.component && <app.component />}
        </WindowContent>
        
        {/* Resize handles */}
        <motion.div 
          className="resize-handle resize-handle-right"
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          dragElastic={0}
          dragMomentum={false}
          onDrag={handleResizeRight}
          onDragEnd={handleResizeEnd}
        />
        
        <motion.div 
          className="resize-handle resize-handle-bottom"
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          dragElastic={0}
          dragMomentum={false}
          onDrag={handleResizeBottom}
          onDragEnd={handleResizeEnd}
        />
        
        <motion.div 
          className="resize-handle resize-handle-bottom-right"
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          dragElastic={0}
          dragMomentum={false}
          onDrag={handleResizeBottomRight}
          onDragEnd={handleResizeEnd}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default Window;