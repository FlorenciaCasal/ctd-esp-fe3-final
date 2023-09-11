import React, { createContext, useContext, useState, useMemo } from 'react';

export const GlobalStates = createContext();

export const themes = {
    light: {
        font: '#1A1919',
        background: 'white'
    },
    dark: {
        font: '#F0EDED',
        background: '#1A1919'
    }
}

const Context = ({ children }) => {
    const [theme, setTheme] = useState(themes.light);

    const handleChangeTheme = () => {
        if (theme === themes.dark) setTheme(themes.light)
        if (theme === themes.light) setTheme(themes.dark)
    }

    const providerValue = useMemo(() => ({
        theme,
        handleChangeTheme
    }), [theme, handleChangeTheme])

    return (
        <GlobalStates.Provider value={providerValue}>
            {children}
        </GlobalStates.Provider>
    )

}


export default Context;

export const useGlobalStates= () => useContext(GlobalStates);