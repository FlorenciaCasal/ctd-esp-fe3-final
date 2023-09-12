import axios from 'axios'
import {useContext, createContext, useState, useReducer, useEffect} from 'react'

const DentistaStates = createContext()
// const reducer = (state, action) => {
//     //accion para obtener todos los personajes
//     //accion para realizar la paginacion 
//     //accion para agregar favoritos
//     //accion para borrar favoritos
//     //accion para cambiar de tema
// }
const localFavs = JSON.parse(localStorage.getItem('favs'))
const initialFavState = localFavs ? localFavs : []

const Context = ({children}) => {
    const [dentistas, setDentistas] = useState([])
    const [favs, setFavs] = useState(initialFavState)
    const [theme, setTheme] = useState(true)
    
    const url = 'https://jsonplaceholder.typicode.com/users'

    useEffect(() => {
        axios(url)
        .then(res => setDentistas(res.data))
     
        
    }, [])

    useEffect(() => {
        localStorage.setItem('favs', JSON.stringify(favs))
    },[favs])

    return (
        <DentistaStates.Provider value={{dentistas, favs, setFavs}}>
            {children}
        </DentistaStates.Provider>
    )
}

export default Context

export const useDentistaStates = () => useContext(DentistaStates)


// import React, { createContext, useContext, useState, useMemo } from 'react';

// export const GlobalStates = createContext();

// export const themes = {
//     light: {
//         font: 'black',
//         background: 'white'
//     },
//     dark: {
//         font: 'white',
//         background: 'black'
//     }
// }

// const Context = ({ children }) => {
//     const [theme, setTheme] = useState(themes.light);

//     const handleChangeTheme = () => {
//         if (theme === themes.dark) setTheme(themes.light)
//         if (theme === themes.light) setTheme(themes.dark)
//     }

//     const providerValue = useMemo(() => ({
//         theme,
//         handleChangeTheme
//     }), [theme, handleChangeTheme])

//     return (
//         <GlobalStates.Provider value={providerValue}>
//             {children}
//         </GlobalStates.Provider>
//     )

// }


// export default Context;

// export const useGlobalStates= () => useContext(GlobalStates);