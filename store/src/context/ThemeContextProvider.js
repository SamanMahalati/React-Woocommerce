import React, { createContext, useState } from 'react';

export const ThemeContext = createContext()

const ThemeContextProvider = ({children}) => {

    const [themeIsLight, setThemeIsLight] = useState(true)

    return (
        <ThemeContext.Provider value={{themeIsLight , setThemeIsLight}}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContextProvider;