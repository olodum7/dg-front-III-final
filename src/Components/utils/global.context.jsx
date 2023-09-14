import { createContext, useContext, useReducer, useEffect } from "react";
import axios from 'axios';
import reducer from './reducer'

const localFavs = JSON.parse(localStorage.getItem('favs'))
const initialFavState = localFavs ? localFavs : []

export const initialState = {
  dentists:[], 
  dentistDetail:[],
  favs: initialFavState, 
  theme: true
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

  return (
    <ContextGlobal.Provider value={{dentistsState, dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider

export const useContextGlobal = () => useContext(ContextGlobal); 
