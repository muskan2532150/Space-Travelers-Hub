import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchdata } from '../redux/Mission/Mission';
import MissionItem from './MissionItem';

const Missions = () => {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.mission);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchdata());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="all-missions">
      <div className="missions-headings">
        <h3 className="mission-h3">Mission</h3>
        <h3 className="description-h3">Description</h3>
        <h3 className="status-h3">Status</h3>
        <h3 className="empty-h3"> </h3>
      </div>
      {data.map((mission) => (
        <MissionItem mission={mission} key={mission.mission_id} />
      ))}
    </div>
  );
};

export default Missions;
