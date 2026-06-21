import React, { createContext, useEffect, useState } from "react";
import { getLoacalStorage,setLoacalStorage } from "../Utils/LocalStorage";

export const AuthContextCreate = createContext();

const AuthContext = ({ children }) => {

  const [userData, setUserData] = useState(null);

 if (!localStorage.getItem('employee') || !localStorage.getItem('admin')) {
    setLoacalStorage();  }

 useEffect(() => {
    const {employee,admin} =getLoacalStorage()
 
    setUserData({employee,admin})
  }, [])
  

  return (
    <div>
      <AuthContextCreate.Provider value={userData}>
        {children}
      </AuthContextCreate.Provider>
    </div>
  );
};

export default AuthContext;
