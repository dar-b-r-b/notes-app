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
      state.notesList.splice(
        state.notesList.findIndex((n) => n.id === action.payload),
        1
      );
    },
    editNote: (state, action) => {
      const { id, editableNote } = action.payload;
      console.log(action.payload);
      const noteIndex = state.notesList.findIndex((n) => n.id === id);
      if (noteIndex !== -1) {
        state.notesList[noteIndex].text = editableNote;
      }
    },
  },
});
export const { addNote, deleteNote, editNote } = notesSlice.actions;
export default notesSlice.reducer;
