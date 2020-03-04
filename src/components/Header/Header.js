import React from "react";
import "./Header.scss";
import logo from "../../img/logo.png";

import { Search } from "../Search/Search";

const Header = ({ black, search, onPrint, data, onDataFilter }) => {
  const renderSearch = () => {
    if (search) {
      return <Search data={data} onDataFilter={onDataFilter} />;
    }

    return null;
  };

  return (
    <header className={`header ${black ? `black` : ``}`}>
      <img src={logo} className="logo" />
      {renderSearch()}
      {onPrint("Text for printing")}
    </header>
  );
};

export { Header };
