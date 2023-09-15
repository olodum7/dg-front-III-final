import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";
import "./../styles.css";

const Favs = () => {

  const {dentistsState} = useContextGlobal()

  return (
    <main className={dentistsState.theme ? 'light' : 'dark'}>
      <h1>Mis favoritos </h1>
      <div className="card-grid">
        {dentistsState.favs.map(fav => <Card dentist={fav} key={fav.id} />)}
      </div>
    </main>
  );
};

export default Favs;
