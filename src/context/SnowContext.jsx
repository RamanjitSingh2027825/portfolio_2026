import { createContext, useState, useEffect, useContext } from 'react';

const SnowContext = createContext();

export const SnowProvider = ({ children }) => {
  const [showSnow, setShowSnow] = useState(false);

  useEffect(() => {
    // Check if user has a saved preference
    const savedPreference = localStorage.getItem('snow-preference');
    
    if (savedPreference !== null) {
      setShowSnow(savedPreference === 'true');
    } else {
      // Default behavior: Auto-enable only in Winter (Dec, Jan, Feb)
      const month = new Date().getMonth();
      const isWinter = month === 11 || month === 0 || month === 1;
      setShowSnow(isWinter);
    }
  }, []);

  const toggleSnow = () => {
    setShowSnow((prev) => {
      const newState = !prev;
      localStorage.setItem('snow-preference', newState);
      return newState;
    });
  };

  return (
    <SnowContext.Provider value={{ showSnow, toggleSnow }}>
      {children}
    </SnowContext.Provider>
  );
};

export const useSnow = () => useContext(SnowContext);
