import React, {  createContext, useState } from "react";


export const UserContext = createContext();



export default function UserProvider ({ children }) {
    const [user, setUser] = useState(null);
    console.log("Context user ", user)
    return(
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    );
}

