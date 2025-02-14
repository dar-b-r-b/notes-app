import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    notesList: [{ id: "0", text: "Какой-то важный текст заметки" }],
  },
  reducers: {
    addNote: (state, action) => {
      if (action.payload !== "") {
        state.notesList.push({ id: uuidv4(), text: action.payload });
      }
      return;
    },
    deleteNote: (state, action) => {
      console.log("уdаление редюсер");
      //filter((n) => n.id !== action.payload);
      state.notesList.splice(
        state.notesList.findIndex((n) => n.id === action.payload),
        1
      );
    },
  },
});
export const { addNote, deleteNote } = notesSlice.actions;
export default notesSlice.reducer;
