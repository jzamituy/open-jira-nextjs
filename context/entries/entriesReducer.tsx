import { Entry } from "@/interfaces";
import { EntriesState } from ".";
import { EntryStatus } from "../../interfaces/entry";

export const ENTRY_TYPES = {
  ADD_ENTRY: "Entries - Add entry",
  REMOVE_ENTRY: "Entries - Remove entry",
  UPDATE_ENTRY: "Entries - Update entry",
};

type EntriesActionType =
  | { type: typeof ENTRY_TYPES.ADD_ENTRY; payload: Entry }
  | { type: typeof ENTRY_TYPES.REMOVE_ENTRY; payload: Entry }
  | { type: typeof ENTRY_TYPES.UPDATE_ENTRY; payload: Entry };

const getUpdatedEntries = (entries: Entry[], updatedEntry: Entry): Entry[] => {
  const indexToUpdate = entries.findIndex(
    (entry) => entry._id === updatedEntry._id
  );
  const newEntries = [...entries];
  newEntries[indexToUpdate] = updatedEntry;

  return newEntries;
};

export const entriesReducer = (
  state: EntriesState,
  action: EntriesActionType
): EntriesState => {
  switch (action.type) {
    case ENTRY_TYPES.ADD_ENTRY:
      return {
        ...state,
        entries: [...state.entries, action.payload],
      };

    case ENTRY_TYPES.UPDATE_ENTRY:
      return {
        ...state,
        entries: getUpdatedEntries(state.entries, action.payload),
      };

    default:
      return state;
  }
};
