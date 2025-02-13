import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add } from "./notesSlice";
import { HStack, Input } from "@chakra-ui/react";

export function Notes() {
  const notes = useSelector((state) => state.notes.notesList);
  const dispatch = useDispatch();
  const [newNotes, setNewNotes] = useState("");
  return (
    <>
      <HStack>
        <Input
          value={newNotes}
          onChange={(e) => setNewNotes(e.target.value)}
        ></Input>
        <button onClick={() => dispatch(add(newNotes))}>
          Добавить заметку
        </button>
      </HStack>

      {notes.map((n) => {
        return <div>{n}</div>;
      })}
    </>
  );
}
