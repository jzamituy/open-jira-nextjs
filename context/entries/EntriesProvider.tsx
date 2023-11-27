import { FC, ReactNode, useReducer } from "react";
import { EntriesContext } from ".";
import { ENTRY_TYPES, entriesReducer } from "./entriesReducer";
import { Entry } from "@/interfaces";
import { v4 as uuidv4 } from "uuid";

export interface EntriesState {
  entries: Entry[];
}

const ENTRIES_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: uuidv4(),
      description: "Just a description",
      status: "finished",
      createdAt: Date.now(),
      updatedAt: 0,
    },
    {
      _id: uuidv4(),
      description: "Just a description",
      status: "pending",
      createdAt: Date.now(),
      updatedAt: 0,
    },
    {
      _id: uuidv4(),
      description: "Just a description",
      status: "pending",
      createdAt: Date.now(),
      updatedAt: 0,
    },
    {
      _id: uuidv4(),
      description: "Just a description",
      status: "in-progress",
      createdAt: Date.now(),
      updatedAt: 0,
    },
  ],
};

export const EntriesProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE);

  const addNewEntry = (description: string) => {
    const newEntry: Entry = {
      _id: uuidv4(),
      description,
      status: "pending",
      createdAt: Date.now(),
    };

    dispatch({ type: ENTRY_TYPES.ADD_ENTRY, payload: newEntry });
  };

  const updateEntry = (updatedEntry: Entry) => {
    dispatch({ type: ENTRY_TYPES.UPDATE_ENTRY, payload: updatedEntry });
  };

  return (
    <EntriesContext.Provider value={{ ...state, addNewEntry, updateEntry }}>
      {children}
    </EntriesContext.Provider>
  );
};
