import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRockets } from "../redux/rockets/rockets";

const Rockets = () => {
  const { rockets, status } = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchRockets());
    }
  }, []);

  return <div></div>;
};

export default Rockets;
