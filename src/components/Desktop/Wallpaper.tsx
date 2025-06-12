import React, { useEffect, useRef } from 'react';

interface WallpaperProps {
  // src is kept for backward compatibility but not used for silk background
  src?: string;
  // ReactBits Silk background properties
  speed?: number;
  scale?: number;
  color?: string;
  noiseIntensity?: number;
  rotation?: number;
}

/**
 * Wallpaper component that displays a silk background effect
 * Inspired by ReactBits Silk background (https://www.reactbits.dev/backgrounds/silk)
 */
const Wallpaper: React.FC<WallpaperProps> = ({ 
  speed = 5,
  scale = 1,
  color = '#7B7481',
  noiseIntensity = 1.5,
  rotation = 0
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions to match window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Parse the color to RGB components
    const hexToRgb = (hex: string) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : { r: 123, g: 116, b: 129 }; // Default to #7B7481
    };
    
    const rgb = hexToRgb(color);
    
    // Animation variables
    let time = 0;
    
    // Animation function
    const animate = () => {
      time += 0.01 * speed;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Set rotation
      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate(rotation);
      ctx.translate(-canvas.width / 2, -canvas.height / 2);
      
      // Draw silk pattern
      const drawSilk = () => {
        const size = Math.max(canvas.width, canvas.height) * scale;
        const step = 20;
        
        for (let x = -size; x < size; x += step) {
          ctx.beginPath();
          ctx.moveTo(canvas.width / 2 + x, 0);
          
          for (let y = 0; y < canvas.height; y += 5) {
            // Create wave effect
            const noise = Math.sin(y * 0.01 + time) * noiseIntensity * 20;
            const wave = Math.sin(y * 0.02 + time * 0.5) * 50 * scale;
            
            ctx.lineTo(canvas.width / 2 + x + wave + noise, y);
          }
          
          // Set line style
          ctx.strokeStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.5)`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      };
      
      drawSilk();
      ctx.restore();
      
      requestAnimationFrame(animate);
    };
    
    // Start animation
    const animationId = requestAnimationFrame(animate);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [speed, scale, color, noiseIntensity, rotation]);
  
  return (
    <canvas 
      ref={canvasRef}
      className="wallpaper"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
      }}
    />
  );
};

export default Wallpaper;