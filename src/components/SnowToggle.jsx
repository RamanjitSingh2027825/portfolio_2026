import { useSnow } from '../context/SnowContext';
import './ThemeToggle.css'; // Reusing existing button styles

const SnowToggle = () => {
  const { showSnow, toggleSnow } = useSnow();

  return (
    <button 
      className={`theme-toggle ${showSnow ? 'active' : ''}`} 
      onClick={toggleSnow} 
      aria-label="Toggle Snow"
      title={showSnow ? "Disable Snow" : "Enable Snow"}
      style={{ color: showSnow ? 'var(--accent-color)' : 'var(--text-secondary)' }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-snowflake">
        <line x1="2" x2="22" y1="12" y2="12"/>
        <line x1="12" x2="12" y1="2" y2="22"/>
        <path d="m20 20-5-5"/>
        <path d="m4 20 5-5"/>
        <path d="m20 4-5 5"/>
        <path d="m4 4 5 5"/>
      </svg>
    </button>
  );
};

export default SnowToggle;
