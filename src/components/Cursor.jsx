import { useState, useEffect, useRef } from 'react';
import './Cursor.css';

const Cursor = () => {
  const [hidden, setHidden] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  
  const cursorRef = useRef(null);
  const trailRefs = useRef([]);
  const mouse = useRef({ x: 0, y: 0 });
  const trailCoordinates = useRef(Array(25).fill({ x: 0, y: 0 }));

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseenter', onMouseEnter);
      document.addEventListener('mouseleave', onMouseLeave);
      document.addEventListener('mousedown', onMouseDown);
      document.addEventListener('mouseup', onMouseUp);
    };

    const removeEventListeners = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
    };

    const onMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const onMouseEnter = () => setHidden(false);
    const onMouseLeave = () => setHidden(true);
    const onMouseDown = () => setClicked(true);
    const onMouseUp = () => setClicked(false);

    // AI Energy Trail Animation
    let animationFrameId;
    
    const animateTrail = () => {
      let x = mouse.current.x;
      let y = mouse.current.y;

      trailCoordinates.current.forEach((point, index) => {
        // Variable ease for "whip" effect
        const nextPoint = trailCoordinates.current[index - 1] || { x, y };
        const ease = 0.3; 
        
        point.x += (nextPoint.x - point.x) * ease;
        point.y += (nextPoint.y - point.y) * ease;
        
        const el = trailRefs.current[index];
        if (el) {
           el.style.transform = `translate3d(${point.x}px, ${point.y}px, 0) scale(${1 - index * 0.03})`;
        }
      });

      animationFrameId = requestAnimationFrame(animateTrail);
    };

    addEventListeners();
    handleLinkHoverEvents();
    animateTrail();

    return () => {
      removeEventListeners();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleLinkHoverEvents = () => {
    const handleMouseOver = () => setLinkHovered(true);
    const handleMouseOut = () => setLinkHovered(false);

    document.querySelectorAll('a, button, .menu-toggle, .project-card, .timeline-content, .skill-tag, .theme-toggle').forEach((el) => {
      el.addEventListener('mouseover', handleMouseOver);
      el.addEventListener('mouseout', handleMouseOut);
    });
  };

  useEffect(() => {
    handleLinkHoverEvents();
  });

  return (
    <>
      <div 
        ref={cursorRef}
        className={`ai-cursor-main ${hidden ? 'hidden' : ''} ${clicked ? 'clicked' : ''} ${linkHovered ? 'hovered' : ''}`}
      >
        <div className="cursor-reticle"></div>
        <div className="cursor-center"></div>
      </div>
      
      {trailCoordinates.current.map((_, index) => (
        <div 
          key={index}
          ref={el => trailRefs.current[index] = el}
          className={`ai-trail ${hidden ? 'hidden' : ''}`}
        />
      ))}
    </>
  );
};

export default Cursor;
