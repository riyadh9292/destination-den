import { createContext } from "react";
import { useFirebase } from "../Hooks/useFirebase";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const allContext = useFirebase();
  return (
    <AuthContext.Provider value={allContext}>{children}</AuthContext.Provider>
  );
};
