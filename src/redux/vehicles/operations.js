import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const fetchVehicles = createAsyncThunk(
  "vehicles/fetchAll",
  // reset is for redux vehicles reducer to know if it should spread or overwrite items in the array of vehicle
  async ({ page, filters = {}, reset = false }, thunkAPI) => {
    try {
      const {
        location,
        vehicleType,
        transmission,
        vehicleEquipment = [],
      } = filters;

      const params = {
        page,
        limit: 4,
      };

      if (location) {
        params.location = location;
      }
      if (vehicleType) {
        params.form = vehicleType;
      }
      if (transmission) {
        params.transmission = transmission.toLowerCase();
      }
      ["AC", "kitchen", "TV", "bathroom"].forEach((equipment) => {
        if (vehicleEquipment.includes(equipment)) {
          params[equipment] = true;
        }
      });

      const { data } = await axios.get("/campers", {
        params: {
          ...params,
          limit: 4,
        },
      });

      return { reset, ...data };
    } catch (error) {
      if (error.message === "Request failed with status code 404") {
        return thunkAPI.rejectWithValue("Items matching your filter not found");
      } else {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  }
);
