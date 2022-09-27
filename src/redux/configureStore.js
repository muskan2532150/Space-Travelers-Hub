import { configureStore } from "@reduxjs/toolkit";
import rocketsSlice from "./rockets/rockets";

const store = configureStore({
  reducer: {
    rockets: rocketsSlice.reducer,
  },
});

export default store;
