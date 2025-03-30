import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  info: null,
  video: null,
  credits: null,
  similar: null,
  recommendations: null,
  externalid: null,
  watchproviders: null,
  translations: null,
};

export const tvSlice = createSlice({
  name: "tv",
  initialState,
  reducers: {
    loadtv: (state, action) => {
      state.info = action.payload;
    },
    removetv: (state) => {
      state.info = null;
      state.video = null;
      state.credits = null;
      state.similar = null;
      state.recommendations = null;
      state.externalid = null;
      state.watchproviders = null;
      state.translations = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loadtv, removetv } = tvSlice.actions;

export default tvSlice.reducer;
