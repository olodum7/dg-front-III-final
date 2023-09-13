import React from "react";
import { useContextGlobal } from "./utils/global.context";


const Card = ({ dentist }) => {

  const { dispatch } = useContextGlobal();

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    dispatch({type: 'ADD_FAVS', payload: dentist})
  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        <h3>{dentist.name}</h3>
        <h3>{dentist.username}</h3>
        <h3>{dentist.id}</h3>

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
