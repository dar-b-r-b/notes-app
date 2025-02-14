import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add } from "./notesSlice";
import {
  HStack,
  Textarea,
  Button,
  Box,
  Card,
  IconButton,
  Separator,
} from "@chakra-ui/react";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

export function Notes() {
  const notes = useSelector((state) => state.notes.notesList);
  const dispatch = useDispatch();
  const [newNotes, setNewNotes] = useState("");
  return (
    <>
      <Box display="flex" justifyContent="center">
        <HStack flexBasis="50%" pt="5">
          <Textarea
            value={newNotes}
            onChange={(e) => setNewNotes(e.target.value)}
          ></Textarea>
          <Button onClick={() => dispatch(add(newNotes))}>
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
                  <IconButton aria-label="Search database" variant="plain">
                    <AiOutlineDelete />
                  </IconButton>
                  <IconButton aria-label="Search database" variant="plain">
                    <AiOutlineEdit />
                  </IconButton>
                </HStack>
                <Separator />
                <Card.Body
                  color="fg.muted"
                  wordWrap="break-word"
                  whiteSpace="normal"
                >
                  {n.text}
                </Card.Body>
              </Card.Root>
            );
          })}
        </HStack>
      </Box>
    </>
  );
}
