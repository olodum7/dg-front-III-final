import React from "react";
import { useContextGlobal } from "./utils/global.context";
import { Link } from "react-router-dom";
import showToastMessage from "./utils/toast.notifications";
import animalImages from "./utils/mock.dentist.images";

const Card = ({ dentist }) => {
  const { dentistsState, dispatch } = useContextGlobal(); // Acceder al estado global

  const isFavorite = dentistsState.favs.some((item) => item.id === dentist.id); // Verificar si es un favorito

  const imageUrl = animalImages.find(image => image.id === dentist.id)?.url || ""; // Mock con imágenes para cada card

  const addFav = () => {
    let favs = dentistsState.favs || []; // Obtener la lista de favoritos del estado global

    const alreadyExists = favs.some((item) => item.id === dentist.id);

    if (!alreadyExists) {
      dispatch({ type: "ADD_FAVS", payload: dentist });
      showToastMessage("success");
    } else {
      dispatch({ type: "REMOVE_FAVS", payload: dentist });
      showToastMessage("error");
    }
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto mx-2 my-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300 card">
      <img
        className="w-full"
        src={imageUrl}
        alt={"Photo of " + dentist.name}
      />

      <div className="px-6 py-4 card-body">
        <div className="font-bold text-xl mb-2">{dentist.name}</div>
        <p className="text-gray-600 text-base">@{dentist.username}</p>

        <Link
          to={"/detail/" + dentist.id}
          className="bg-blue-500 hover:bg-blue-400 text-white hover:text-white text-center px-8 py-2 w-80 inline-block mt-10 rounded font-medium uppercase"
        >
          Saber más
        </Link>

        <button onClick={addFav} className="fav-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-10 h-10 flex ml-auto "
          >
            <g
              xmlns="http://www.w3.org/2000/svg"
              id="Page-1"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g
                id="Dribbble-Light-Preview"
                transform="translate(-139.000000, -361.000000)"
                fill="#000000"
                className={`hover:shadow-xl transition duration-300 ${
                  isFavorite
                    ? "fill-rose-500 hover:fill-slate-100"
                    : "fill-slate-100 hover:fill-rose-500"
                }`}
              >
                <g id="icons" transform="translate(56.000000, 160.000000)">
                  <path
                    d="M103.991908,206.599878 C103.779809,210.693878 100.744263,212.750878 96.9821188,215.798878 C94.9997217,217.404878 92.0324261,217.404878 90.042679,215.807878 C86.3057345,212.807878 83.1651892,210.709878 83.0045394,206.473878 C82.8029397,201.150878 89.36438,198.971878 93.0918745,203.314878 C93.2955742,203.552878 93.7029736,203.547878 93.9056233,203.309878 C97.6205178,198.951878 104.274358,201.159878 103.991908,206.599878"
                    id="love-[#1488]"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
        </button>
      </div>
      <div className="px-6 py-4 card-id">
        <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2">
          {dentist.id}
        </span>
      </div>
    </div>
  );
};

export default Card;
