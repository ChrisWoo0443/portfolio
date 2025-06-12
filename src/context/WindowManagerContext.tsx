import React, { createContext, useContext, useState, useCallback } from 'react';
import type { Window } from '../types';

// Define the context state type
interface WindowManagerState {
  windows: Window[];
  openWindow: (appId: string) => void;
  closeWindow: (windowId: string) => void;
  minimizeWindow: (windowId: string) => void;
  focusWindow: (windowId: string) => void;
  updateWindowPosition: (windowId: string, position: { x: number; y: number }) => void;
  updateWindowSize: (windowId: string, size: { width: number; height: number }) => void;
}

// Create the context with a default undefined value
const WindowManagerContext = createContext<WindowManagerState | undefined>(undefined);

// Custom hook to use the WindowManager context
export const useWindowManager = (): WindowManagerState => {
  const context = useContext(WindowManagerContext);
  if (!context) {
    throw new Error('useWindowManager must be used within a WindowManagerProvider');
  }
  return context;
};

// Props for the WindowManagerProvider component
interface WindowManagerProviderProps {
  children: React.ReactNode;
}

// WindowManagerProvider component
export const WindowManagerProvider: React.FC<WindowManagerProviderProps> = ({ children }) => {
  // State to store all windows
  const [windows, setWindows] = useState<Window[]>([]);
  
  // Generate a unique window ID
  const generateWindowId = useCallback(() => {
    return `window-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
  }, []);
  
  // Get the highest z-index from all windows
  const getHighestZIndex = useCallback(() => {
    if (windows.length === 0) return 100;
    return Math.max(...windows.map(window => window.zIndex)) + 1;
  }, [windows]);
  
  // Open a new window for an app
  const openWindow = useCallback((appId: string) => {
    // Check if window already exists and is minimized
    const existingWindow = windows.find(w => w.appId === appId && w.isMinimized);
    
    if (existingWindow) {
      // Restore the minimized window
      setWindows(prevWindows =>
        prevWindows.map(w =>
          w.id === existingWindow.id
            ? { ...w, isMinimized: false, zIndex: getHighestZIndex() }
            : w
        )
      );
    } else {
      // Create a new window
      const newWindow: Window = {
        id: generateWindowId(),
        appId,
        position: {
          x: 100 + Math.random() * 100,
          y: 100 + Math.random() * 100
        },
        size: { width: 600, height: 400 },
        isMinimized: false,
        zIndex: getHighestZIndex()
      };
      
      setWindows(prevWindows => [...prevWindows, newWindow]);
    }
  }, [windows, generateWindowId, getHighestZIndex]);
  
  // Close a window
  const closeWindow = useCallback((windowId: string) => {
    setWindows(prevWindows => prevWindows.filter(w => w.id !== windowId));
  }, []);
  
  // Minimize a window
  const minimizeWindow = useCallback((windowId: string) => {
    setWindows(prevWindows =>
      prevWindows.map(w =>
        w.id === windowId ? { ...w, isMinimized: true } : w
      )
    );
  }, []);
  
  // Focus a window (bring to front)
  const focusWindow = useCallback((windowId: string) => {
    setWindows(prevWindows =>
      prevWindows.map(w =>
        w.id === windowId
          ? { ...w, zIndex: getHighestZIndex() }
          : w
      )
    );
  }, [getHighestZIndex]);
  
  // Update window position
  const updateWindowPosition = useCallback(
    (windowId: string, position: { x: number; y: number }) => {
      setWindows(prevWindows =>
        prevWindows.map(w =>
          w.id === windowId ? { ...w, position } : w
        )
      );
    },
    []
  );
  
  // Update window size
  const updateWindowSize = useCallback(
    (windowId: string, size: { width: number; height: number }) => {
      setWindows(prevWindows =>
        prevWindows.map(w =>
          w.id === windowId ? { ...w, size } : w
        )
      );
    },
    []
  );
  
  // Context value
  const value: WindowManagerState = {
    windows,
    openWindow,
    closeWindow,
    minimizeWindow,
    focusWindow,
    updateWindowPosition,
    updateWindowSize
  };
  
  return (
    <WindowManagerContext.Provider value={value}>
      {children}
    </WindowManagerContext.Provider>
  );
};

// Export the context for direct usage if needed
export { WindowManagerContext };