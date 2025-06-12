import { useState, useEffect, useCallback } from 'react';

interface UseWindowFocusProps {
  id: string;
  initialZIndex: number;
  isActive: boolean;
  onFocus?: (id: string) => void;
}

/**
 * Custom hook for managing window focus and z-index
 */
const useWindowFocus = ({
  id,
  initialZIndex,
  isActive,
  onFocus
}: UseWindowFocusProps) => {
  const [zIndex, setZIndex] = useState(initialZIndex);
  const [isFocused, setIsFocused] = useState(isActive);

  // Update focus state when isActive prop changes
  useEffect(() => {
    setIsFocused(isActive);
  }, [isActive]);

  // Handle focus event
  const handleFocus = useCallback(() => {
    if (!isFocused) {
      setIsFocused(true);
      onFocus?.(id);
    }
  }, [id, isFocused, onFocus]);

  // Update z-index when focus changes
  useEffect(() => {
    if (isFocused) {
      // This would be handled by the WindowManagerContext in practice
      // as it needs to know about all windows to assign the highest z-index
      setZIndex(1000); // Placeholder value, actual implementation would use context
    }
  }, [isFocused]);

  return { zIndex, isFocused, handleFocus };
};

export default useWindowFocus;