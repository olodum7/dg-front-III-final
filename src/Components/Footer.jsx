import React from "react";
import { useContextGlobal } from "../Components/utils/global.context";
import LogoDH from "./../DH.png"

const Footer = () => {
  const { dentistsState } = useContextGlobal();

  return (
    <footer className={`${dentistsState.theme ? 'light' : 'dark'} bg-white py-2 md:py-4 w-full`}>
      <div className="container-fluid px-4 mx-auto md:flex md:items-center w-11/12 md:flex md:items-center md:justify-between">
        <span className="text-sm sm:text-center">
          © 2023 Emanuel Espinel
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium sm:mt-0">
          <li>
            Powered by <img src={LogoDH} width="160" alt="Logo de Digital House" className="inline"/>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
