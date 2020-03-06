import React, { Component } from "react";
import "./Exit.scss";
import close from "../../img/close.png";

class Exit extends Component {
  render() {
    const { closePopup } = this.props;

    return (
      <span className="exit" onClick={closePopup}>
        <img src={close} alt="close" />
      </span>
    );
  }
}

export { Exit };
