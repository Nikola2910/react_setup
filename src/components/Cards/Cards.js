import React, { Fragment } from "react";
import { Card } from "../Card/Card";
import uuid from "react-uuid";
import "./Cards.scss";
import add from "../../img/add.png";
import ReactTooltip from "react-tooltip";

const Cards = ({ data, showPopup, removeUser, editUser }) => {
  const renderCards = () => (
    <div className="cards">
      <ReactTooltip
        id="addUser"
        place="top"
        effect="solid"
        type="info"
        backgroundColor="rgb(0, 174, 255);"
      >
        <span> Add User </span>
      </ReactTooltip>

      <div className="add-user card" onClick={showPopup}>
        {" "}
        <img data-tip data-for="addUser" src={add} alt="add-user" />
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
          editUser={() => {
            editUser(card.id);
          }}
        />
      ))}
    </div>
  );

  return <Fragment>{renderCards()}</Fragment>;
};

export { Cards };
