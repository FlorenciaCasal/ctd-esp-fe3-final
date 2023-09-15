import axios from 'axios'
import { useContext, createContext, useReducer, useEffect } from 'react'
import './context.css'


const DentistaStates = createContext()

const localFavs = JSON.parse(localStorage.getItem('favs'));

const initialFavState = localFavs ? localFavs : [];

const initialThemeState = localStorage.getItem('theme') || 'light';

const initialState = {
    dentistas: [],
    dentista: {},
    favs: initialFavState,
    theme: initialThemeState,
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'GET_DENTISTAS':
            return { ...state, dentistas: action.payload }
        case 'GET_DENTISTA':
            return { ...state, dentista: action.payload }
        case 'ADD_FAV':
            return { ...state, favs: [...state.favs, action.payload] }
        case 'DELETE_FAV':
            return { ...state, favs: state.favs.filter(fav => fav.id !== action.payload.id) }
        case 'TOGGLE_THEME':
            const newTheme = state.theme === 'light' ? 'dark' : 'light';
            localStorage.setItem('theme', newTheme);
            return {
                ...state,
                theme: newTheme,
            };
        default:
            throw new Error()
    }
}

const Context = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const url = 'https://jsonplaceholder.typicode.com/users'

    useEffect(() => {
        axios(url)
            .then(res => dispatch({ type: 'GET_DENTISTAS', payload: res.data }))
    }, [])

    useEffect(() => {
        localStorage.setItem('favs', JSON.stringify(state.favs))
    }, [state.favs])

    useEffect(() => {
        document.body.className = state.theme;
    }, [state.theme]);

    const toggleTheme = () => {
        dispatch({ type: 'TOGGLE_THEME' });
    };

    return (

        <DentistaStates.Provider value={{ state, dispatch, toggleTheme }}>
            {children}
        </DentistaStates.Provider>
    )
}

export default Context

export const useDentistaStates = () => useContext(DentistaStates)

