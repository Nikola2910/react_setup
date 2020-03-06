import React from "react";
import "./Header.scss";
import logo from "../../img/logo.png";
import sortIcon from "../../img/sort.png";

import { Search } from "../Search/Search";

const Header = ({ black, search, onPrint, data, onDataFilter, sortItems }) => {
  const renderSearch = () => {
    if (search) {
      return <Search data={data} onDataFilter={onDataFilter} />;
    }

    return null;
  };

  return (
    <header className={`header ${black ? `black` : ``}`}>
      <img src={logo} className="logo" />
      <img src={sortIcon} className="sort" alt="sort" onClick={sortItems} />
      {renderSearch()}
    </header>
  );
};

export { Header };
