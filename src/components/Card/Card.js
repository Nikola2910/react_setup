import React from "react";
import "./Card.scss";
import user from "../../img/user.png";
import deleteUser from "../../img/delete.png";
import edit from "../../img/edit.png";
import ReactTooltip from "react-tooltip";

const Card = ({ name, lastName, age, id, removeUser, editUser }) => (
  <div className="card ">
    <h3>{name}</h3>
    <h4>{lastName}</h4>
    <span>{age}</span>
    <img src={user} className="user" alt="user-icon" />

    <ReactTooltip id="delete" place="top" effect="solid" type="error">
      <span> Delete User </span>
    </ReactTooltip>

    <img
      data-tip
      data-for="delete"
      src={deleteUser}
      className="deleteUser"
      alt="delete-user"
      onClick={() => {
        removeUser(id);
      }}
    />

    <ReactTooltip id="edit" place="top" effect="solid" type="warning">
      <span> Edit User </span>
    </ReactTooltip>

    <img
      data-tip
      data-for="edit"
      className="copy"
      src={edit}
      onClick={() => editUser(id)}
    />
  </div>
);

export { Card };
