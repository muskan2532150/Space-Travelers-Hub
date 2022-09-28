import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const ROCKET_ENDPOINT = " https://api.spacexdata.com/v3/rockets";

// action
const FETCH_ROCKETS = "spaceTravelers-hub/rockets/FETCH_ROCKETS";

const initialState = {
  rockets: [],
  status: "idle",
};

export const fetchRockets = createAsyncThunk(FETCH_ROCKETS, async () => {
  try {
    const response = await axios.get(ROCKET_ENDPOINT);
    return response.data;
  } catch (error) {
    return error.message;
  }
});

const rocketsSlice = createSlice({
  name: "rockets",
  initialState,
  reducers: {
    bookRocket: (state, action) => {
      state.rockets = state.rockets.map((rocket) => {
        if (rocket["id"] === action.payload) {
          return {
            ...rocket,
            reserved: true,
          };
        }
        return rocket;
      });
    },
    cancelBooking: (state, action) => {
      state.rockets = state.rockets.map((rocket) => {
        if (rocket["id"] === action.payload) {
          return {
            ...rocket,
            reserved: false,
          };
        }
        return rocket;
      });
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchRockets.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchRockets.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.rockets = action.payload;
      })
      .addCase(fetchRockets.rejected, (state, actions) => {
        throw new Error(actions.error);
      });
  },
});

export default rocketsSlice;
export const { bookRocket, cancelBooking } = rocketsSlice.actions;
