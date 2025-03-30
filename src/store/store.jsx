import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./reducers/movieslice";
import tvReducer from "./reducers/tvSlice";
import personReducer from "./reducers/personSlice";

export const store = configureStore({
  reducer: {
    movie: movieReducer,
    tv: tvReducer,
    person: personReducer,
  },
})