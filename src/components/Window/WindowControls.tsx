import React from 'react';

interface WindowControlsProps {
  onClose: () => void;
  onMinimize: () => void;
  onMaximize?: () => void;
}

/**
 * WindowControls component that displays the close, minimize, and maximize buttons
 */
const WindowControls: React.FC<WindowControlsProps> = ({ 
  onClose, 
  onMinimize, 
  onMaximize 
}) => {
  return (
    <div className="window-controls">
      <div 
        className="window-control close"
        onClick={onClose}
      >
        <span className="control-icon">×</span>
      </div>
      <div 
        className="window-control minimize"
        onClick={onMinimize}
      >
        <span className="control-icon">−</span>
      </div>
      {onMaximize && (
        <div 
          className="window-control maximize"
          onClick={onMaximize}
        >
          <span className="control-icon">+</span>
        </div>
      )}
    </div>
  );
};

export default WindowControls;