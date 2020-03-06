import React, { Fragment } from "react";
import { Card } from "../Card/Card";
import uuid from "react-uuid";
import "./Cards.scss";
import add from "../../img/add.png";

const Cards = ({ data, showPopup, removeUser, copyUser }) => {
  const renderCards = () => (
    <div className="cards">
      <div className="add-user card" onClick={showPopup}>
        {" "}
        <img src={add} alt="add-user" />
      </div>

      {data.map(card => (
        <Card
          key={uuid()}
          id={card.id}
          name={card.name}
          lastName={card.lastName}
          age={card.age}
          removeUser={() => {
            removeUser(card.id);
          }}
          copyUser={() => {
            copyUser(card.id);
          }}
        />
      ))}
    </div>
  );

  return <Fragment>{renderCards()}</Fragment>;
};

export { Cards };
