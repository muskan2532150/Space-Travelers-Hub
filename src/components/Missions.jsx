import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchdata } from "../redux/Mission/Mission";


const Missions = () => {
const dispatch =useDispatch();

useEffect(() => {
  dispatch(fetchdata());
});


  return (
    <div>
     
    </div>
  );
};

export default Missions;
