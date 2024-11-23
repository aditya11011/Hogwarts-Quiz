
import React, { createContext, useState } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [Name, setName] = useState('hello');

    return (
        <UserContext.Provider value={{ Name, setName }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };
