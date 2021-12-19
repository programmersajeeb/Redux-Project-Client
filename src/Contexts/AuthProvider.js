import React, { createContext } from 'react';
import useFirebase from '../Hooks/useFirebase';

export const AuthContexts = createContext();

const AuthProvider = ({children}) => {
  const allContext = useFirebase();
  return (
    <AuthContexts.Provider value={allContext}>
      {children}
    </AuthContexts.Provider>
  );
};

export default AuthProvider;