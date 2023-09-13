import React from "react";
import { Link } from 'react-router-dom'
import { useContextGlobal } from '../Components/utils/global.context'
import "./../styles.css";

const Navbar = () => {

  const { dispatch } = useContextGlobal();

  const switchTheme = ()=>{
    dispatch({type: 'SWITCH_THEME', payload: ''})
  }
  
  return (
    <nav>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/favs">Favs</Link>
      </nav>
      <button onClick={switchTheme}>Change theme</button>
    </nav>
  );
};

export default Navbar;
