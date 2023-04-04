import React, { useState, useEffect } from "react";
import "./PersonContainer.scss";
import PersonCard from "../personCard/PersonCard";

const PersonContainer = () => {
  const [users, setUsers] = useState([]);
  const [visibleUsers, setVisibleUsers] = useState(users.slice(0, 6));

  function showMore() {
    const endIndex = visibleUsers.length + 6;
    setVisibleUsers(users.slice(0, endIndex));
  }

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch(
        "https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=100"
      );
      const data = await response.json();
      setUsers(data.users);
      setVisibleUsers(data.users.slice(0, 6));
    }

    fetchUsers();
  }, []);

  return (
    <div className="person-container" id="person-container">
      <div className="person-text-container">
        <h1 className="get-text">Working with GET request</h1>
      </div>
      <div className="cards-container">
        {visibleUsers.map((user) => (
          <PersonCard
            key={user.id}
            name={user.name}
            email={user.email}
            phone={user.phone}
            position={user.position}
            photo={user.photo}
          />
        ))}
      </div>

      <button className="btn" onClick={showMore}>
        Show more
      </button>
    </div>
  );
};

export default PersonContainer;
