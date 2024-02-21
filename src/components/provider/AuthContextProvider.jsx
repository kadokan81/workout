import { createContext, useContext, useState } from "react";

const AuthContext = createContext({
  username: "",
  setUserName: (username) => {},
});

const AuthContextProvider = ({ children }) => {
  const [userName, setUserName] = useState("");
  return (
    <AuthContext.Provider value={{ username: userName, setUserName }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

export const useAuth = () => useContext(AuthContext);
