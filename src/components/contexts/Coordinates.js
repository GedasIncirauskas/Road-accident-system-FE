import React, { createContext, useState } from 'react';

export const CooredinateContext = createContext();

const CoordinateProvider = ({ children }) => {
  const [coordinates, setCoordinates] = useState();

  return <CooredinateContext.Provider value={{ coordinates, setCoordinates }}>{children}</CooredinateContext.Provider>;
};

export default CoordinateProvider;
