import React from 'react';
import { useDispatch } from "react-redux";
import { memberChange, missionChange } from '../redux/Mission/Mission';


export const MissionItem = ({ mission }) => {
    const dispatch = useDispatch();

    return (
        <>

            <div>{mission.mission_name}</div>
            <div>{mission.description}</div>
            <div>
                <button type='button' onClick={() => dispatch(memberChange(mission.mission_id))}>{mission.member ? 'Active Member' : 'Not A Member'}</button>
            </div>

            <div>
                <button type='button' onClick={() => dispatch(missionChange(mission.mission_id))}>{mission.mission ? 'Join Mission' : 'Leave Mission'}</button>
            </div>

        </>
    )
}
