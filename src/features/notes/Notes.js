import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add } from "./notesSlice";

export function Notes() {
  const notes = useSelector((state) => state.notes.notesList);
  const dispatch = useDispatch();
  const [newNotes, setNewNotes] = useState("");
  return (
    <>
      <div>
        <input
          value={newNotes}
          onChange={(e) => setNewNotes(e.target.value)}
        ></input>
        <button onClick={() => dispatch(add(newNotes))}>
          Добавить заметку
        </button>
      </div>

      {notes.map((n) => {
        return <div>{n}</div>;
      })}
    </>
  );
}
