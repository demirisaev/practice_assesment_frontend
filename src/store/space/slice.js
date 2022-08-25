import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  spaces: [],
  spaceDetails: null,
};

export const spaceSlice = createSlice({
  name: "space",
  initialState,
  reducers: {
    getSpace: (state, action) => {
      state.spaces = action.payload;
    },
    getSpaceDetails: (state, action) => {
      state.spaceDetails = action.payload;
    },
  },
});

export const { getSpace, getSpaceDetails } = spaceSlice.actions;

export default spaceSlice.reducer;
