import React, { useState, useEffect } from "react";
import "./SelectContainer.scss";

const SelectContainer = ({setSelectedRadio}) => {
  const [positions, setPositions] = useState(null);

  const handleRadioChange = (event) => {
    setSelectedRadio(event.target.value);
  };

  const fetchPositiions = () => {
    fetch("https://frontend-test-assignment-api.abz.agency/api/v1/positions")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setPositions(data);
      });
  };

  useEffect(() => {
    fetchPositiions();
  }, []);

  return (
    <div className="select-container">
      <h2>Select your position</h2>
      {positions && positions.positions.map((position) => (
        <label key={position.id}>
          <input
            type="radio"
            name="option"
            value={position.id}
            className="radioBtn"
            onChange={handleRadioChange}
          />
          {position.name}
        </label>
      ))}
    </div>
  );
};

export default SelectContainer;
