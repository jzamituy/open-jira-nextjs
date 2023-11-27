import { EntriesContext } from "@/context/entries";
import { EntryStatus } from "@/interfaces";
import { List, Paper } from "@mui/material";
import React, { FC, useContext, useMemo, DragEvent } from "react";
import { EntryCard } from ".";
import { UIContext } from "@/context/ui";
import styles from "./EntryList.module.css";

type EntryListProps = {
  status: EntryStatus;
};

export const EntryList: FC<EntryListProps> = ({ status }) => {
  const { entries, updateEntry } = useContext(EntriesContext);
  const { isDraggingTask, setIsDraggingTask } = useContext(UIContext);

  const entriesByStatus = useMemo(
    () => entries.filter((task) => task.status === status),
    [entries, status]
  );

  const onDropEntry = (event: DragEvent<HTMLDivElement>) => {
    console.log("onDropEntry event", event);
    const entryId = event.dataTransfer.getData("entryId");
    const entryToUpdate = entries.find((entry) => entry._id === entryId);
    if (!entryToUpdate) return;

    entryToUpdate.status = status;
    entryToUpdate.updatedAt = Date.now();
    updateEntry(entryToUpdate);
    setIsDraggingTask(false);
  };

  const allowDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    console.log("allowDrop event", event);
  };

  return (
    // We will drop items here next
    <div
      onDrop={onDropEntry}
      onDragOver={allowDrop}
      onDragStart={(e) => {}}
      className={isDraggingTask ? styles.dragging : ""}
    >
      <Paper
        sx={{
          height: "calc(100vh - 180px)",
          overflowY: "scroll",
          backgroundColor: "transparent",
        }}
      >
        <List sx={{ opacity: 1 }}>
          {entriesByStatus.map((entry, index) => (
            <EntryCard key={entry._id} entry={entry} position={index} />
          ))}
        </List>
      </Paper>
    </div>
  );
};
