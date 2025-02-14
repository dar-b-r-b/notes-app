import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    notesList: [{ id: "0", text: "Какой-то важный текст заметки" }],
  },
  reducers: {
    add: (state, action) => {
      if (action.payload !== "") {
        state.notesList.push({ id: uuidv4(), text: action.payload });
      }
      return;
    },
  },
});
export const { add } = notesSlice.actions;
export default notesSlice.reducer;
