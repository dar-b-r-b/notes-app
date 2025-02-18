import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addNote, deleteNote, editNote } from "./notesSlice";
import {
  HStack,
  Textarea,
  Button,
  Box,
  Card,
  IconButton,
  Separator,
} from "@chakra-ui/react";
import { AiOutlineEdit, AiOutlineDelete, AiOutlineSave } from "react-icons/ai";

export function Notes() {
  const notes = useSelector((state) => state.notes.notesList);
  const dispatch = useDispatch();
  const [newNotes, setNewNotes] = useState("");
  const [editableNote, setEditableNote] = useState("");
  const [visibleId, setVisibleId] = useState(null);

  return (
    <>
      <Box display="flex" justifyContent="center">
        <HStack flexBasis="50%" pt="5">
          <Textarea
            value={newNotes}
            onChange={(e) => setNewNotes(e.target.value)}
          ></Textarea>
          <Button
            onClick={() => {
              dispatch(addNote(newNotes));
              setNewNotes("");
            }}
          >
            Добавить заметку
          </Button>
        </HStack>
      </Box>
      <Box display="flex">
        <HStack flexWrap="wrap">
          {notes.map((n) => {
            return (
              <Card.Root key={n.id} ml="3" mt="5" maxWidth="250px">
                <HStack>
                  <IconButton
                    aria-label="delete"
                    variant="plain"
                    onClick={() => {
                      console.log("click");
                      dispatch(deleteNote(n.id));
                      console.log(n.id, n.text);
                    }}
                  >
                    <AiOutlineDelete />
                  </IconButton>
                  <IconButton
                    aria-label="edit"
                    variant="plain"
                    onClick={() => {
                      setVisibleId(n.id);
                      setEditableNote(n.text);
                    }}
                  >
                    <AiOutlineEdit />
                  </IconButton>
                  <IconButton
                    variant="plain"
                    visibility={visibleId === n.id ? "visible" : "hidden"}
                    onClick={() => {
                      console.log(editableNote);
                      dispatch(editNote({ id: n.id, editableNote }));
                      setVisibleId(null);
                    }}
                  >
                    <AiOutlineSave />
                  </IconButton>
                </HStack>
                <Separator />
                <Card.Body
                  color="fg.muted"
                  wordWrap="break-word"
                  whiteSpace="normal"
                  p="8"
                >
                  {visibleId === n.id ? (
                    <Textarea
                      value={editableNote}
                      variant="flushed"
                      resize="both"
                      p="2"
                      onChange={(e) => {
                        setEditableNote(e.target.value);
                      }}
                    >
                      {n.text}
                    </Textarea>
                  ) : (
                    n.text
                  )}
                </Card.Body>
              </Card.Root>
            );
          })}
        </HStack>
      </Box>
    </>
  );
}
