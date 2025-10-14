// src/context/UserProvider.jsx
import React, { useState } from "react";
import { UserContext } from "./userContext";


export default function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  console.log("Context user", user);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>

  );
}
