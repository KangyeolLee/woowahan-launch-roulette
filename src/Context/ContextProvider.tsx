import React, {
  createContext,
  PropsWithChildren,
  useMemo,
  useState,
} from 'react';

const defaultValue = {
  location: '전체',
  type: '전체',
  handleSelectLocation: (location: string) => console.error('need init'),
  handleSelectType: (type: string) => console.error('need init'),
};

export const Context = createContext(defaultValue);

const ContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [location, setLocation] = useState(defaultValue.location);
  const [type, setType] = useState(defaultValue.type);

  const memoizedState = useMemo(
    () => ({
      location,
      type,
      handleSelectLocation: (location: string) => setLocation(location),
      handleSelectType: (type: string) => setType(type),
    }),
    [location, type]
  );

  return <Context.Provider value={memoizedState}>{children}</Context.Provider>;
};

export default ContextProvider;
