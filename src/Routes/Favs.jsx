import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";

const Favs = () => {
  const { dentistsState, dispatch } = useContextGlobal();

  const clearFavs = () => {
    dispatch({ type: "CLEAR_FAVS" });
  };

  return (
    <main className={`${dentistsState.theme ? "light" : "dark"} py-20 mx-auto md:flex md:items-center md:justify-center w-full flex-col min-h-[86vh]`}>
      <div className="card-grid">
        {dentistsState.favs.map((fav) => (
          <Card dentist={fav} key={fav.id} />
        ))}
      </div>
      {dentistsState.favs.length > 0 ? (
        <button onClick={clearFavs} className="bg-red-500 hover:bg-red-400 text-white hover:text-white text-center px-8 py-2 w-100 inline-block mt-20 rounded font-medium uppercase">Eliminar todos mis favoritos</button>
      ): "No tienes ningún favorito guardado."}
    </main>
  );
};

export default Favs;
