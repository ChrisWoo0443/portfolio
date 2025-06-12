// Type definitions for the macOS portfolio application

/**
 * App interface representing an application in the system
 */
export interface App {
  id: string;
  name: string;
  icon: string;
  component: React.ComponentType;
  externalLink?: string;
}

/**
 * Window interface representing a window in the system
 */
export interface Window {
  id: string;
  appId: string;
  position: { x: number; y: number };
  size: { width: number; height: number };
  isMinimized: boolean;
  zIndex: number;
}

/**
 * Project interface representing a project in the portfolio
 */
export interface Project {
  id: string;
  name: string;
  description: string;
  image: string;
  link: string;
  category: string;
}