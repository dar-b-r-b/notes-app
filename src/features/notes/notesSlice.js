import { createSlice } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    notesList: [],
  },
  reducers: {
    add: (state, action) => {
      state.notesList.push(action.payload);
    },
  },
});
export const { add } = notesSlice.actions;
export default notesSlice.reducer;
