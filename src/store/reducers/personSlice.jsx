import { createSlice } from "@reduxjs/toolkit";

const personSlice = createSlice({
  name: "person",
  initialState: {
    info: null,
  },
  reducers: {
    loadPerson: (state, action) => {
      state.info = action.payload;
    },
    removePerson: (state) => {
      state.info = null;
    },
  },
});

// Export the actions
export const { loadPerson, removePerson } = personSlice.actions;

// Export the reducer
export default personSlice.reducer;
