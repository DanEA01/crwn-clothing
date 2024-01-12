import { createContext, useEffect, useState } from "react";
import {
  onAuthStateChangedListener,
  registerFromAuth,
} from "../utils/firebase/firebase.utils";

import CrwnLogo from "../assets/crown.svg?react";
import "./user.context.styles.scss";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loader, setLoader] = useState("hide");

  useEffect(() => {
    setLoader("show");
    const unsuscribe = onAuthStateChangedListener((user) => {
      setLoader("hide");
      if (user) {
        registerFromAuth(user);
      }
      setCurrentUser(user);
    });
    return unsuscribe;
  }, []);

  const value = { currentUser, setCurrentUser };

  return (
    <UserContext.Provider value={value}>
      <div className={`loading-container ${loader}`}>
        <div className="loading-spiner-container">
          <CrwnLogo className="logo" />
          <span className="loader"></span>
        </div>
      </div>
      {children}
    </UserContext.Provider>
  );
};
