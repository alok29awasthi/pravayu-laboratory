import React from "react";
import "./ServicesInfo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ServicesInfo(props) {
  return (
    <div className="info-cards">
      <span className="info-card-icon">
        <FontAwesomeIcon className="info-fa-icon" icon={props.icon} />
      </span>
      <h2 className="info-card-title">{props.title}</h2>
      <h3 className="info-card-description">{props.description}</h3>
    </div>
  );
}

export default ServicesInfo;