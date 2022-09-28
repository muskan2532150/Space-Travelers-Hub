import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchdata } from "../redux/Mission/Mission";
import { MissionItem } from "./MissionItem";


const Missions = () => {
const dispatch =useDispatch();
const {data,status} = useSelector((state)=>state.mission);

useEffect(() => {
  if(status==='idle'){
  dispatch(fetchdata());
  }
},[]);

  return (
    <div>
     {data.map((mission)=>(
      <MissionItem mission={mission} key={mission.mission_id}/>
     ))}
    </div>
  );
};

export default Missions;
