import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [registeredUsers, setRegisteredUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  // registration function
  const registerUser = (user) => {
    setRegisteredUsers((prevUsers) => [...prevUsers, user]);
  };

  // login function with user check
  const loginUser = (email, password) => {
    const user = registeredUsers.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      setCurrentUser(user);
      return user;
    }
    return null;
  };

  //logout function
  const logoutUser = () => {
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        registeredUsers,
        currentUser,
        registerUser,
        loginUser,
        logoutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
