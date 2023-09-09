import React, { createContext, useContext, useState, useMemo } from 'react';

export const GlobalStates = createContext();

export const themes = {
    light: {
        font: 'black',
        background: 'white'
    },
    dark: {
        font: 'white',
        background: 'black'
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