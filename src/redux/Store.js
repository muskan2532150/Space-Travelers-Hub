import { configureStore } from '@reduxjs/toolkit';
import rocketsSlice from './rockets/rockets';
import MissionSliceReducer from './Mission/Mission';

const store = configureStore({
  reducer: {
    rockets: rocketsSlice.reducer,
    mission: MissionSliceReducer,
  },
});

export default store;
