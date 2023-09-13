import { createContext, useContext, useState, useReducer, useEffect } from "react";
import axios from 'axios';

export const initialState = {theme: "", data: []}

const localFavs = JSON.parse(localStorage.getItem('favs'))
const initialFavState = localFavs ? localFavs : []

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const reducer = (state, action) => {

  }

  const [dentists, setDentist] = useState([]);
  const [favs, setFavs] = useState(initialFavState);

  const url = 'https://jsonplaceholder.typicode.com/users'

  useEffect(() => {
    axios(url)
    .then(res => setDentist(res.data))
  }, [])

  useEffect(() => {
    localStorage.setItem('Favs', JSON.stringify(favs))
  }, [favs])

  return (
    <ContextGlobal.Provider value={{dentists, favs, setFavs}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider

export const useContextGlobal = () => useContext(ContextGlobal); 
