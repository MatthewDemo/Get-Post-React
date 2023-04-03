import React, { useState, useEffect } from "react";
import "./PersonCard.scss";
import defaultPersonIcon from "../../assets/images/person-icon.svg";
import Tooltip from "./popup/Tooltip";

const PersonCard = ({ name, email, phone, position, photo }) => {
  const [isHoveringEmail, setIsHoveringEmail] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = () => {
    setIsHoveringEmail(true);
  };

  const handleMouseLeave = () => {
    setIsHoveringEmail(false);
  };

  const handleMouseMove = (event) => {
    setCursorPosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <div className="person-card">
      {photo.endsWith(".jpg") ? (
        <img className="character-photo" src={photo} alt="photo" />
      ) : (
        <img className="character-photo" src={defaultPersonIcon} alt="photo" />
      )}
      {name.length < 30 ? (
        <p className="character-name">{name}</p>
      ) : (
        <p className="character-name">{name.slice(0, 30) + "..."}</p>
      )}
      <div className="character-details">
        <p>{position}</p>
        {email.length < 30 ? (
          <>
            <p
              onMouseEnter={handleMouseEnter}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              {email}
            </p>
            {isHoveringEmail && (
              <Tooltip x={cursorPosition.x} y={cursorPosition.y} text={email} />
            )}
          </>
        ) : (
          <>
            <p
              onMouseEnter={handleMouseEnter}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              {email.slice(0, 30) + "..."}
            </p>
            {isHoveringEmail && (
              <Tooltip x={cursorPosition.x} y={cursorPosition.y} text={email} />
            )}
          </>
        )}

        <p>{phone}</p>
      </div>
    </div>
  );
};

export default PersonCard;
