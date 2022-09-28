import { configureStore } from '@reduxjs/toolkit';
import MissionSliceReducer from './Mission/Mission';

export default configureStore({
  reducer: {
    mission: MissionSliceReducer,
  },
});
