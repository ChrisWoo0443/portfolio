import { useState } from 'react';
import type { PanInfo } from 'framer-motion';

interface UseDraggableProps {
  initialPosition: { x: number; y: number };
  onDragEnd?: (position: { x: number; y: number }) => void;
}

/**
 * Custom hook for making elements draggable
 */
const useDraggable = ({
  initialPosition,
  onDragEnd
}: UseDraggableProps) => {
  const [position, setPosition] = useState(initialPosition);

  const handleDrag = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    setPosition({
      x: position.x + info.delta.x,
      y: position.y + info.delta.y
    });
  };

  const handleDragEnd = () => {
    // Ensure position is within viewport bounds
    const boundedPosition = {
      x: Math.max(0, Math.min(window.innerWidth - 100, position.x)),
      y: Math.max(0, Math.min(window.innerHeight - 100, position.y))
    };
    
    setPosition(boundedPosition);
    onDragEnd?.(boundedPosition);
  };

  return { position, handleDrag, handleDragEnd };
};

export default useDraggable;