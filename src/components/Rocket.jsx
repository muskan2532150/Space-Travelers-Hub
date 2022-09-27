import React from "react";

const Rocket = (prop) => {
  const { name, description, imageUrl, reserved } = prop;
  return (
    <div className="rocket">
      <img src={imageUrl} alt={`${name} rocket`} />

      <div className="rocket-text">
        <h2 className="rocket-name">{name}</h2>
        <p className="rocket-description">
          {reserved && <button>Reserved</button>}
          {description}
        </p>

        {reserved ? (
          <button className="cancel-reservations">Cancel Reservations</button>
        ) : (
          <button className="rocket-reserve">Reserve Rocket</button>
        )}
      </div>
    </div>
  );
};

export default Rocket;
