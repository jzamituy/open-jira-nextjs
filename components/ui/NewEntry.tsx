import { Box, Button, TextField } from "@mui/material";
import React, {
  ChangeEvent,
  ChangeEventHandler,
  useContext,
  useState,
} from "react";
import SavedOutlinedIcon from "@mui/icons-material/SaveOutlined";
import AddIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { EntriesContext } from "@/context/entries";
import { UIContext } from "@/context/ui";

export const NewEntry = () => {
  const { addNewEntry } = useContext(EntriesContext);
  const { isAddingEntry, toggleAddingEntry } = useContext(UIContext);

  const [text, setText] = useState("");
  const [isInputTouched, setIsInputTouched] = useState(false);

  const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const save = () => {
    if (text.length <= 0) return;
    console.log(text);
    toggleAddingEntry();
    addNewEntry(text);
  };

  const resetForm = () => {
    setIsInputTouched(false);
    setText("");
  };

  return (
    <Box sx={{ marginBottom: 2, paddingX: 2 }}>
      {isAddingEntry ? (
        <>
          <TextField
            autoFocus
            fullWidth
            sx={{ marginTop: 2, marginBottom: 1 }}
            placeholder="New entry"
            multiline
            label="New entry"
            helperText={
              isInputTouched && text.length <= 0 ? "Input some value" : ""
            }
            onBlur={() => setIsInputTouched(true)}
            onChange={handleTextChange}
            error={isInputTouched && text.length <= 0}
          />
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => {
                resetForm();
                toggleAddingEntry();
              }}
            >
              Cancel
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              endIcon={<SavedOutlinedIcon />}
              onClick={() => {
                save();
                resetForm();
              }}
            >
              Save
            </Button>
          </Box>
        </>
      ) : (
        <Button
          variant="outlined"
          color="secondary"
          fullWidth
          startIcon={<AddIcon />}
          onClick={toggleAddingEntry}
        >
          Add Task
        </Button>
      )}
    </Box>
  );
};
