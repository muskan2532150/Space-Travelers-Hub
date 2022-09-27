import { createSlice } from '@reduxjs/toolkit';

const URL = 'https://api.spacexdata.com/v3/missions';

const STATUSES = Object.freeze({
  IDLE: 'idle',
  ERROR: 'error',
  LOADING: 'loading',
});

export const MissionSlice = createSlice({
  name: 'mission',
  initialState: {
    data: [],
    status: STATUSES.IDLE,
  },
  reducers: {
    getdata: (state, action) => { state.data = action.payload; },
    setStatus: (state, action) => { state.status = action.payload; },
    memberChange: (state, action) => { state.data = state.data.map(mission => { if (mission.mission_id !== action.payload) return mission;  return {...mission,member:!mission.member}}) },
    missionChange: (state, action) => { state.data = state.data.map(mission => { if (mission.mission_id !== action.payload) return mission;  return {...mission,mission:!mission.mission}}) },
  },
});

export const { getdata, setStatus, memberChange, missionChange } = MissionSlice.actions;

export default MissionSlice.reducer;

// Thunks

export function fetchdata() {
  return async function fetchdataThunk(dispatch) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const res = await fetch(`${URL}`);
      const data = await res.json();
      const array = [];
      Object.entries(data).forEach(([, value]) => array.push({
        mission_name: value.mission_name,
        mission_id: value.mission_id,
        description: value.description,
        member: false,
        mission: false
      })
      );
      dispatch(getdata(array));
      dispatch(setStatus(STATUSES.IDLE));
    } catch (error) {
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}
