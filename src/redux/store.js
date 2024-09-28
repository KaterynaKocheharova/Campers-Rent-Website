import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { filtersReducer } from "../redux/filters/slice";
import { vehiclesReducer } from "../redux/vehicles/slice";
import { favoriteReducer } from "./favorite/slice";

const favoritePersistConfiguration = {
  key: "favorite",
  storage,
  whitelist: ["favIds"], 
};

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    vehicles: vehiclesReducer,
    favorite: persistReducer(favoritePersistConfiguration, favoriteReducer)
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
