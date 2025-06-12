import React from 'react';
import './MenuBar.css';

interface MenuBarProps {
  appName?: string;
}

const MenuBar: React.FC<MenuBarProps> = () => {
  // Current date and time for the center of the menu bar
  const [currentTime, setCurrentTime] = React.useState<string>('');
  const [currentDate, setCurrentDate] = React.useState<string>('');

  // Update time and date every minute
  React.useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      
      // Format time
      const timeOptions: Intl.DateTimeFormatOptions = {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      };
      setCurrentTime(now.toLocaleTimeString([], timeOptions));
      
      // Format date as abbreviated day before month without comma (e.g., Thu June 12 2025)
      const dateOptions: Intl.DateTimeFormatOptions = {
        weekday: 'short',
        month: 'long',
        day: 'numeric',
      };
      // Get formatted parts and manually combine to remove comma
      const formattedDate = now.toLocaleDateString('en-US', dateOptions);
      // Replace the comma with a space
      setCurrentDate(formattedDate.replace(',', ''));
    };

    updateDateTime(); // Initial call
    const interval = setInterval(updateDateTime, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  // No menu items as requested

  return (
    <div className="menu-bar">
      <div className="menu-bar-datetime">
        <div className="datetime-item">{currentDate}</div>
        <div className="datetime-item">{currentTime}</div>
      </div>
    </div>
  );
};

export default MenuBar;