import React from "react";
import { useContextGlobal } from "./utils/global.context";
import { Link } from "react-router-dom";

const Card = ({ dentist }) => {

  const { dispatch } = useContextGlobal();

  const addFav = () => {
    dispatch({ type: "ADD_FAVS", payload: dentist });
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto my-8 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
      <img
        className="w-full"
        src="https://tailwindcss.com/img/card-top.jpg"
        alt="Sunset in the mountains"
      />
      
      <div className="px-6 py-4 card-body">
        <div className="font-bold text-xl mb-2">{dentist.name}</div>
        <p class="text-gray-600 text-base">@{dentist.username}</p>
       
        <Link
          to={"/detail/" + dentist.id}
          className="bg-blue-500 hover:bg-blue-400 text-white hover:text-white text-center px-8 py-2 w-80 inline-block mt-10 rounded"
        >
          Saber más
        </Link>

        <button
          onClick={addFav}
          className="rounded-full bg-purple-900 text-white hover:bg-white hover:text-purple-900 hover:shadow-xl focus:outline-none w-10 h-10 flex ml-auto transition duration-300 fav-btn"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="stroke-current m-auto"
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
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
