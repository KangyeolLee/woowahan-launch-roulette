import React, {
  createContext,
  PropsWithChildren,
  useCallback,
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

  const handleSelectLocation = useCallback((location: string) => {
    setLocation(location);
  }, []);

  const handleSelectType = useCallback((type: string) => {
    setType(type);
  }, []);

  const memoizedState = useMemo(() => ({ location, type }), [location, type]);

  return (
    <Context.Provider
      value={{
        ...memoizedState,
        handleSelectLocation,
        handleSelectType,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
