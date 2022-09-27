import { createSlice } from '@reduxjs/toolkit';

const URL = 'https://api.spacexdata.com/v3/missions';

const STATUSES = Object.freeze({
  IDLE: 'idle',
  ERROR: 'error',
  LOADING: 'loading',
});

export const MissionSlice = createSlice({
  name: 'Mission',
  initialState: {
    data: [],
    status: STATUSES.IDLE,
  },
  reducers: {
    getdata: (state, action) => { state.data = action.payload; },
    setStatus: (state, action) => { state.status = action.payload; },

  },
});

export const { getdata, setStatus } = MissionSlice.actions;

export default MissionSlice.reducer;

// Thunks

export function fetchdata() {
  return async function fetchdataThunk(dispatch, getState) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const res = await fetch(`${URL}`);
      const data = await res.json();
      const array = [];
      Object.entries(data).forEach(([key,value])=>{
        console.log(key,value.mission_name);
        array[key]={
          mission_name,
          mission_id,
          description
        }

      })
      dispatch(getdata(data));
      dispatch(setStatus(STATUSES.IDLE));
    } catch (error) {
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}
