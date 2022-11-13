import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useState,
} from 'react';

const defaultValue = {
  location: '전체',
  handleSelectLocation: (location: string) => console.log('need init'),
};

export const Context = createContext(defaultValue);

const ContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [location, setLocation] = useState(defaultValue.location);

  const handleSelectLocation = useCallback((location: string) => {
    setLocation(location);
  }, []);

  return (
    <Context.Provider value={{ location, handleSelectLocation }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
