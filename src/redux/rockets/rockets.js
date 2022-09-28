import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const ROCKET_ENDPOINT = ' https://api.spacexdata.com/v3/rockets';

// action
const FETCH_ROCKETS = 'spaceTravelers-hub/rockets/FETCH_ROCKETS';

const initialState = {
  rockets: [],
  status: 'idle',
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
  name: 'rockets',
  initialState,
  reducers: {
    bookRocket: (state, action) => {
      const st = state;
      st.rockets = st.rockets.map((rocket) => {
        if (rocket.id === action.payload) {
          return {
            ...rocket,
            reserved: true,
          };
        }
        return rocket;
      });
    },
    cancelBooking: (state, action) => {
      const st = state;
      st.rockets = st.rockets.map((rocket) => {
        if (rocket.id === action.payload) {
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
      .addCase(fetchRockets.pending, (state) => {
        const st = state;
        st.status = 'loading';
      })
      .addCase(fetchRockets.fulfilled, (state, action) => {
        const st = state;
        st.status = 'succeeded';
        st.rockets = action.payload;
      })
      .addCase(fetchRockets.rejected, (state, actions) => {
        throw new Error(actions.error);
      });
  },
});

export default rocketsSlice;
export const { bookRocket, cancelBooking } = rocketsSlice.actions;
