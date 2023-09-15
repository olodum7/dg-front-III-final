import { createContext, useContext, useReducer, useEffect } from "react";
import axios from 'axios';
import reducer from './reducer'

const localFavs = JSON.parse(localStorage.getItem('favs'))
const initialFavState = localFavs ? localFavs : []

const localTheme = JSON.parse(localStorage.getItem('theme'))
const initialThemeState = localTheme ? localTheme : false

export const initialState = {
  dentists:[], 
  dentistDetail:[],
  favs: initialFavState, 
  theme: initialThemeState
}

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  const [dentistsState, dispatch] = useReducer(reducer, initialState);

  const url = 'https://jsonplaceholder.typicode.com/users'

  useEffect(() => {
    axios(url)
    .then(res => dispatch({type: 'GET_DENTISTS', payload: res.data}))
  }, [])

  useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(dentistsState.favs))
  }, [dentistsState.favs])

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(dentistsState.theme))
  }, [dentistsState.theme])

  return (
    <ContextGlobal.Provider value={{dentistsState, dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider

export const useContextGlobal = () => useContext(ContextGlobal); 
