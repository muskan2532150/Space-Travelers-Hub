import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRockets } from '../redux/rockets/rockets';
import Rocket from './Rocket';

const Rockets = () => {
  const { rockets, status } = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  const rocketElements = rockets.map((rocket) => {
    const {
      id, rocketName, description, flickrImages, reserved,
    } = rocket;
    return (
      <Rocket
        name={rocketName}
        description={description}
        imageUrl={flickrImages[0]}
        key={id}
        id={id}
        reserved={reserved}
      />
    );
  });

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchRockets());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div className="rockets-container">{rocketElements}</div>;
};

export default Rockets;
