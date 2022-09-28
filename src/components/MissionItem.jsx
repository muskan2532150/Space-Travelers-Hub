import React from 'react';
import { useDispatch } from 'react-redux';
import { missionChange } from '../redux/Mission/Mission';

export const MissionItem = ({ mission }) => {
  const dispatch = useDispatch();

  return (
    <section className="mission">
      <h3 className="mission">{mission.mission_name}</h3>
      <p className="mission-description border-helper">{mission.description}</p>
      <div className="mission-active-member-wrapper border-helper">
        <h3 className="mission-active-member ">
          {mission.mission ? 'Active Member' : 'Not A Member'}
        </h3>
      </div>
      <div className="border-helper mission-join-mission-wrapper">
        <button
          type="button"
          className="mission-join-mission"
          onClick={() => dispatch(missionChange(mission.mission_id))}>
          {mission.mission ? 'Leave Mission' : 'Join Mission'}
        </button>
      </div>
    </section>
  );
};
