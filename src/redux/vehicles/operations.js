// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

// export const fetchVehicles = createAsyncThunk(
//   "vehicles/fetchAll",
//   async ({ page, limit }, thunkAPI) => {
//     try {
//       const { data } = await axios.get("/campers", {
//         params: {
//           page,
//           limit,
//         },
//       });
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

// export const fetchVehicles = createAsyncThunk(
//   "vehicles/fetchAll",
//   async ({ page, limit, filters }, thunkAPI) => {
//     try {
//       const { location, vehicleType, vehicleEquipment } = filters;

//       // Create an object for the equipment filters with true/false values
//       const equipmentParams = equipmentFilters.reduce((acc, equipment) => {
//         acc[equipment.name] = vehicleEquipment.includes(equipment.name) ? true : undefined;
//         return acc;
//       }, {});

//       const { data } = await axios.get("/campers", {
//         params: {
//           page,
//           limit,
//           location: location || undefined,
//           form: vehicleType || undefined,
//           ...equipmentParams,
//         },
//       });

//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const fetchVehicles = createAsyncThunk(
//   "vehicles/fetchAll",
//   async ({ page, limit, filters = {} }, thunkAPI) => {
//     try {
//       const {
//         location,
//         vehicleType,
//         transmission,
//         vehicleEquipment = [],
//       } = filters;

//       const params = {
//         page,
//         limit,
//       };

//       if (location) {
//         params.location = location;
//       }
//       if (vehicleType) {
//         params.form = vehicleType.toLowerCase();
//       }
//       if (transmission) {
//         params.transmission = transmission.toLowerCase();
//       }
//       equipmentFilters.forEach((equipment) => {
//         if (vehicleEquipment.includes(equipment.name)) {
//           if (
//             equipment.name.toLowerCase() === "ac" ||
//             equipment.name.toLowerCase() === "tv"
//           ) {
//             params[equipment.name.toUpperCase()] = true;
//           } else {
//             params[equipment.name.toLowerCase()] = true;
//           }
//         }
//       });

//       const { data } = await axios.get("/campers", { params });

//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

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
