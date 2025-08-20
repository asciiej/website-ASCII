import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ExperimentContext = createContext();

export const useExperiment = () => {
  const context = useContext(ExperimentContext);
  if (!context) {
    throw new Error('useExperiment must be used within an ExperimentProvider');
  }
  return context;
};

export const ExperimentProvider = ({ children }) => {
  const [isExperimentPage, setIsExperimentPage] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsExperimentPage(location.pathname === '/experiment');
  }, [location.pathname]);

  return (
    <ExperimentContext.Provider value={{ isExperimentPage }}>
      {children}
    </ExperimentContext.Provider>
  );
};
