/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { missionChange } from '../redux/Mission/Mission';

const MissionItem = ({ mission }) => {
  const dispatch = useDispatch();

  return (
    <section className="mission">
      <h3>{mission.mission_name}</h3>
      <p>{mission.description}</p>
      <div>
        <h3 className={mission.mission ? 'activemember' : 'unactive'}>
          {mission.mission ? 'Active Member' : 'Not A Member'}
        </h3>
      </div>
      <div>
        <button type="button" className={mission.mission ? 'activemission' : ''} onClick={() => dispatch(missionChange(mission.mission_id))}>
          {mission.mission ? 'Leave Mission' : 'Join Mission'}
        </button>
      </div>
    </section>
  );
};

export default MissionItem;
