import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useContextGlobal } from "../Components/utils/global.context";
import LogoColor from "./../logo-color.svg"
import LogoBlanco from "./../logo-white.svg"

const Navbar = () => {
  const { dentistsState, dispatch } = useContextGlobal();

  const switchTheme = () => {
    dispatch({ type: "SWITCH_THEME", payload: "" });
  };

  const location = useLocation();

  let toggleBtn = document.querySelector("#navbar-toggle");
  let collapse = document.querySelector("#navbar-collapse");

  if (toggleBtn) {
    toggleBtn.onClick = () => {
      collapse.classNameList.toggle("hidden");
      collapse.classNameList.toggle("flex");
    };
  }

  return (
    <nav className={`${dentistsState.theme ? 'light' : 'dark'} bg-white py-2 md:py-4 w-full`}>
      <div className="container-fluid px-4 mx-auto md:flex md:items-center w-11/12">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="block mt-4 mr-10 pt-2 text-blue-900 lg:inline-block lg:mt-0 hover:text-indigo-600"
          >
            <img src={dentistsState.theme ? LogoColor : LogoBlanco} className="mb-4" width="200" alt="" />
          </Link>
          <button
            className="flex items-center px-3 py-2 text-indigo-500 border border-indigo-500 rounded navbar-burger md:hidden"
            id="navbar-toggle"
          >
            <svg
              className="w-3 h-3 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>

        <div
          className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0"
          id="navbar-collapse"
        >
          <Link
            to="/"
            className={`block mt-4 mr-10 pt-2 text-blue-900 lg:inline-block lg:mt-0 hover:text-indigo-600 ${location.pathname === '/' ? 'active' : ''  }`}
          >
            Home
          </Link>
          <Link
            to="/contact"
            className={`block mt-4 mr-10 pt-2 text-blue-900 lg:inline-block lg:mt-0 hover:text-indigo-600 ${location.pathname === '/contact' ? 'active' : ''  }`}
          >
            Contact
          </Link>
          <Link
            to="/favs"
            className={`block mt-4 mr-10 pt-2 text-blue-900 lg:inline-block lg:mt-0 hover:text-indigo-600 ${location.pathname === '/favs' ? 'active' : ''  }`}
          >
            Favs
          </Link>

          

          {/* Dark mode toggle */}
          <button
            id="theme-toggle"
            onClick={switchTheme}
            type="button"
            className={`${
              !dentistsState.theme
                ? "text-gray-300 border-gray-300"
                : "text-gray-800 border-gray-500"
            } border-2 rounded-lg text-sm p-2 block mt-4 mr-10 text-blue-900 lg:inline-block lg:mt-0 hover:text-purple-200`}
          >
            <svg
              id="theme-toggle-dark-icon"
              className={`${!dentistsState.theme ? "hidden" : ""} w-5 h-5`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
            </svg>
            <svg
              id="theme-toggle-light-icon"
              className={`${!dentistsState.theme ? "" : "hidden"} w-5 h-5`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
