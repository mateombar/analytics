import React, { createContext } from 'react';
import { useContext } from '../hooks/useContext';
export const Context = createContext();
const Provider = ({ children }) => {
    const initialSate = useContext();
    const value = {
        ...initialSate
    }
    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}

export default Provider