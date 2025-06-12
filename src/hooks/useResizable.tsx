import { useState } from 'react';
import type { PanInfo } from 'framer-motion';

interface UseResizableProps {
  initialSize: { width: number; height: number };
  minSize?: { width: number; height: number };
  maxSize?: { width: number; height: number };
  onResizeEnd?: (size: { width: number; height: number }) => void;
}

/**
 * Custom hook for making elements resizable
 */
const useResizable = ({
  initialSize,
  minSize = { width: 300, height: 200 },
  maxSize = { width: 1200, height: 800 },
  onResizeEnd
}: UseResizableProps) => {
  const [size, setSize] = useState(initialSize);

  const handleResize = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo, direction: string) => {
    let newWidth = size.width;
    let newHeight = size.height;
    
    // Adjust width and height based on resize direction
    switch (direction) {
      case 'right':
        newWidth = Math.max(minSize.width, Math.min(maxSize.width, size.width + info.delta.x));
        break;
      case 'bottom':
        newHeight = Math.max(minSize.height, Math.min(maxSize.height, size.height + info.delta.y));
        break;
      case 'bottom-right':
        newWidth = Math.max(minSize.width, Math.min(maxSize.width, size.width + info.delta.x));
        newHeight = Math.max(minSize.height, Math.min(maxSize.height, size.height + info.delta.y));
        break;
      default:
        break;
    }
    
    setSize({ width: newWidth, height: newHeight });
  };

  const handleResizeEnd = () => {
    onResizeEnd?.(size);
  };

  return { size, handleResize, handleResizeEnd };
};

export default useResizable;