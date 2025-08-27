import { createSlice } from '@reduxjs/toolkit';
import { fetchCampers, fetchCampersDetails } from './operations';

const initialState = {
  campers: [],
  campersDetails: null,
  isLoading: false,
  error: null,
};

export const campersSlice = createSlice({
  name: 'campers',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCampers.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.isLoading = false;

        // Якщо перша сторінка — замінюємо список
        if (action.meta.arg.page === 1) {
          state.campers = action.payload.items;
        } else {
          // Додаємо нові кемпери до існуючих
          state.campers = [...state.campers, ...action.payload.items];
        }
      })
      .addCase(fetchCampers.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(fetchCampersDetails.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCampersDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.campersDetails = action.payload;
      })
      .addCase(fetchCampersDetails.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const campersReducer = campersSlice.reducer;
