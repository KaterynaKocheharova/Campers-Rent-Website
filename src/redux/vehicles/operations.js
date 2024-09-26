import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const fetchVehicles = createAsyncThunk(
  "vehicles/fetchAll",
  async ({ page, limit }, thunkAPI) => {
    try {
      const { data } = await axios.get("/campers", {
        params: {
          page,
          limit,
        },
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
