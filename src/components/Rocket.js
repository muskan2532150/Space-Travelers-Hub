import React from 'react';
import { useDispatch } from 'react-redux';
import { bookRocket, cancelBooking } from '../redux/rockets/rockets';

const Rocket = (prop) => {
  const {
    name, description, imageUrl, reserved, id,
  } = prop;

  const dispatch = useDispatch();

  return (
    <div className="rocket">
      <img src={imageUrl} alt={`${name} rocket`} />

      <div className="rocket-text">
        <h2 className="rocket-name">{name}</h2>
        <p className="rocket-description">
          {reserved && <button type="button" className="reserved-flag">Reserved</button>}
          {description}
        </p>

        {reserved ? (
          <button type="button" className="cancel-reservation" onClick={() => { dispatch(cancelBooking(id)); }}>
            Cancel Reservations
          </button>
        ) : (
          <button type="button" className="rocket-reserve" onClick={() => { dispatch(bookRocket(id)); }}>
            Reserve Rocket
          </button>
        )}
      </div>
    </div>
  );
};

export default Rocket;
