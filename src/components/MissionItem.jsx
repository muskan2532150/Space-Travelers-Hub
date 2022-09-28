import React from 'react';
import { useDispatch } from "react-redux";
import { missionChange } from '../redux/Mission/Mission';


export const MissionItem = ({ mission }) => {
    const dispatch = useDispatch();

    return (
        <>
            <div>{mission.mission_name}</div>
            <div>{mission.description}</div>
            <div>
                {mission.mission ? 'Active Member' : 'Not A Member'}
            </div>
            <div>
                <button type='button' onClick={() => dispatch(missionChange(mission.mission_id))}>{mission.mission ? 'Leave Mission' : 'Join Mission'}</button>
            </div>

        </>
    )
}
