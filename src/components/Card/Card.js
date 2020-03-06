import React from "react";
import "./Card.scss";
import user from "../../img/user.png";
import deleteUser from "../../img/delete.png";
import copy from "../../img/copy.png";

const Card = ({ name, lastName, age, id, removeUser, copyUser }) => (
  <div className="card ">
    <h3>{name}</h3>
    <h4>{lastName}</h4>
    <span>{age}</span>
    <img src={user} className="user" alt="user-icon" />
    <img
      src={deleteUser}
      className="deleteUser"
      alt="delete-user"
      onClick={() => {
        removeUser(id);
      }}
    />
    <img
      className="copy"
      src={copy}
      alt="copy"
      onClick={() => {
        copyUser(id);
      }}
    />
  </div>
);

export { Card };
