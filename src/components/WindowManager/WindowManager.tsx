import React from 'react';
import { AnimatePresence } from 'framer-motion';
import Window from '../Window/Window';
import { useWindowManager } from '../../context/WindowManagerContext';
import type { App } from '../../types';

interface WindowManagerProps {
  apps: App[];
}

/**
 * WindowManager component that manages and renders all windows
 */
const WindowManager: React.FC<WindowManagerProps> = ({ apps }) => {
  const { windows } = useWindowManager();
  
  return (
    <div className="window-manager">
      <AnimatePresence>
        {windows.map(window => {
          // Find the app associated with this window
          const app = apps.find(app => app.id === window.appId);
          
          // Skip rendering if app not found or window is minimized
          if (!app || window.isMinimized) return null;
          
          return (
            <Window
              key={window.id}
              window={window}
              app={app}
              isActive={window.zIndex === Math.max(...windows.map(w => w.zIndex))}
            />
          );
        })}
      </AnimatePresence>
    </div>
  );
};

export default WindowManager;