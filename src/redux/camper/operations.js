import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers';

// export const fetchCampers = createAsyncThunk(
//   'campers/fetchAll',
//   async (_, thunkAPI) => {
//     try {
//       const response = await axios.get(baseURL);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
export const fetchCampers = createAsyncThunk(
  'campers/fetchAll',
  async ({ filters = {}, page = 1, itemsPerPage = 4 }, thunkAPI) => {
    try {
      // формуємо params для axios
      const params = {
        ...filters,
        page: page,
        limit: itemsPerPage,
      };

      const response = await axios.get(baseURL, { params });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCampersDetails = createAsyncThunk(
  'campers/fetchId',
  async ({ id }, thunkAPI) => {
    try {
      const response = await axios.get(`${baseURL}/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
