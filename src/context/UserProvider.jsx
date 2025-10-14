// src/context/UserProvider.jsx
import React, { useState } from "react";
import { UserContext } from "./UserContext.jsx";


export default function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>

  );
}
