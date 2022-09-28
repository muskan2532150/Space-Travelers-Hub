import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRockets } from "../redux/rockets/rockets";
import Rocket from "./Rocket";

const Rockets = () => {
  const { rockets, status } = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  
  const rocketElements = rockets.map((rocket) => {
    const { id, rocket_name, description, flickr_images, reserved } = rocket;
    return (
      <Rocket
        name={rocket_name}
        description={description}
        imageUrl={flickr_images[0]}
        key={id}
        id={id}
        reserved={reserved || null}
      />
    );
  });

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchRockets());
    }
  }, []);

  return <div className="rockets-container">{rocketElements}</div>;
};

export default Rockets;
