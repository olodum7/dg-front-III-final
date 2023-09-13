import { createContext, useContext, useReducer, useEffect } from "react";
import axios from 'axios';

const localFavs = JSON.parse(localStorage.getItem('favs'))
const initialFavState = localFavs ? localFavs : []

export const initialState = {
  dentists:[], 
  dentistDetail:[],
  favs: initialFavState, 
  theme: true
}

export const ContextGlobal = createContext(undefined);

const reducer = (state, action) => {
  switch(action.type) {
    case 'GET_DENTISTS':
      return {...state, dentists: action.payload} 
    case 'ADD_FAVS':
      return {...state, favs: [...state.favs, action.payload]}
    case 'SWITCH_THEME':
      return {...state, theme: !state.theme}
    default:
      throw new Error()
  }
}

export const ContextProvider = ({ children }) => {
  const [dentistsState, dispatch] = useReducer(reducer, initialState);

  const url = 'https://jsonplaceholder.typicode.com/users'

  useEffect(() => {
    axios(url)
    .then(res => dispatch({type: 'GET_DENTISTS', payload: res.data}))
  }, [])

  useEffect(() => {
    localStorage.setItem('Favs', JSON.stringify(dentistsState.favs))
  }, [dentistsState.favs])

  return (
    <ContextGlobal.Provider value={{dentistsState, dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider

export const useContextGlobal = () => useContext(ContextGlobal); 
