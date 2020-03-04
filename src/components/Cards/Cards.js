import React, { Fragment } from "react";
import { Card } from "../Card/Card";
import uuid from "react-uuid";

const Cards = ({ data }) => {
  const renderCards = () => (
    <ul>
      {data.map(card => (
        <Card key={uuid()} name={card.name} age={card.age} />
      ))}
    </ul>
  );

  return <Fragment>{renderCards()}</Fragment>;
};

export { Cards };
