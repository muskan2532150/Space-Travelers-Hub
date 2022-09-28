import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const { mission, rockets } = useSelector((state) => state);

  const allMissions = mission.data.filter((msn) => msn.mission);
  const bookedRockets = rockets.rockets.filter((rkt) => rkt.reserved);

  const missionElements = (
    <ul>
      {allMissions.map((msn) => (
        <li key={msn.mission_id}>{msn.mission_name}</li>
      ))}
    </ul>
  );
  const rocketElements = (
    <ul>
      {bookedRockets.map((rkt) => (
        <li key={rkt.id}>{rkt.rocket_name}</li>
      ))}
    </ul>
  );

  return (
    <div className="profile">
      <div className="profile-missions">{missionElements}</div>
      <div className="profile-rockets">{rocketElements}</div>
    </div>
  );
};

export default Profile;
