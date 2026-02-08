import { useRef, useEffect } from 'react';
import { useSnow } from '../context/SnowContext';
import { useTheme } from '../context/ThemeContext';

const Snow = () => {
  const { showSnow } = useSnow();
  const { theme } = useTheme();
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!showSnow || theme !== 'dark') return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const particles = [];
    const particleCount = 40; // Reduced density for disjointed look

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1, // Slightly smaller particles
        speedY: Math.random() * 1 + 0.3, // Slower fall
        speedX: Math.random() * 0.5 - 0.25,
        opacity: Math.random() * 0.3 + 0.1 // More transparent
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
        ctx.fill();

        p.y += p.speedY;
        p.x += p.speedX;

        if (p.y > canvas.height) {
          p.y = -10;
          p.x = Math.random() * canvas.width;
        }
        if (p.x > canvas.width) p.x = 0;
        if (p.x < 0) p.x = canvas.width;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [showSnow]);

  if (!showSnow || theme !== 'dark') return null;

  return (
    <canvas 
      ref={canvasRef} 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 50
      }}
    />
  );
};

export default Snow;
