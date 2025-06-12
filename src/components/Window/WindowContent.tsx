import React from 'react';

interface WindowContentProps {
  children: React.ReactNode;
}

/**
 * WindowContent component that displays the content of the window
 */
const WindowContent: React.FC<WindowContentProps> = ({ children }) => {
  return (
    <div className="window-content">
      {children}
    </div>
  );
};

export default WindowContent;