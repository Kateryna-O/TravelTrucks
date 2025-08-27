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

        const newCampers = action.payload.items;

        if (action.meta.arg.page === 1) {
          // Перша сторінка — замінюємо список
          state.campers = newCampers;
        } else {
          // Додаємо лише тих кемперів, яких ще немає
          const existingIds = new Set(state.campers.map(c => c.id));
          const filteredCampers = newCampers.filter(
            c => !existingIds.has(c.id)
          );
          state.campers = [...state.campers, ...filteredCampers];
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
