import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const fetchVehicles = createAsyncThunk(
  "vehicles/fetchAll",
  async ({ page, limit, filters = {} }, thunkAPI) => {
    try {
      const {
        location,
        vehicleType,
        transmission,
        vehicleEquipment = [],
      } = filters;

      const params = {};

      if (location) {
        params.location = location;
      }
      if (vehicleType) {
        params.form = vehicleType.toLowerCase();
      }
      if (transmission) {
        params.transmission = transmission.toLowerCase();
      }
      ["AC", "kitchen", "TV", "bathroom"].forEach((equipment) => {
        if (vehicleEquipment.includes(equipment)) {
          params[equipment] = true;
        }
      });

      // Add pagination params last
      params.page = page;
      params.limit = limit;

      const { data } = await axios.get("/campers", { params });

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
