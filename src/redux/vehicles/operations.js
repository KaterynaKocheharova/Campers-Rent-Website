import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchVehicles = createAsyncThunk(
  "vehicles/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("/contacts");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
