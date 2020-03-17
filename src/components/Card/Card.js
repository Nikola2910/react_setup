import React from "react";
import "./Card.scss";
import user from "../../img/user.png";
import deleteUser from "../../img/delete.png";
import edit from "../../img/edit.png";

const Card = ({ name, lastName, age, id, removeUser, editUser }) => (
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
    <img className="copy" src={edit} onClick={() => editUser(id)} />
  </div>
);

export { Card };
