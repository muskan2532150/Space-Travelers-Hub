import { configureStore } from "@reduxjs/toolkit";
import rocketsSlice from "./redux/rockets/rockets";

export default store = configureStore({
  reducer: {
    rockets: rocketsSlice.reducer,
  },
});
