import React from "react";
import "./Header.scss";
import logo from "../../img/logo.png";
import sortIcon from "../../img/sort.png";

const Header = ({ black, search, onPrint, data, onDataFilter, sortItems }) => {
  return (
    <header className="black">
      <div className="wrap">
        <img src={logo} className="logo" />
        <img src={sortIcon} className="sort" alt="sort" onClick={sortItems} />
      </div>
    </header>
  );
};

export { Header };
