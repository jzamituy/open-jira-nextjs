import { UIContext } from "@/context/ui";
import { Entry } from "@/interfaces";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React, { DragEvent, FC, useContext } from "react";
const { formatDistanceToNow } = require("date-fns");

type Props = {
  entry: Entry;
};

export const EntryCard: FC<Props> = ({ entry, position }) => {
  const { setIsDraggingTask } = useContext(UIContext);

  const onDragStart = (event: DragEvent<HTMLDivElement>) => {
    console.log("onDragStart");
    console.log("event", event);
    event.dataTransfer.setData("entryId", entry._id);
    setIsDraggingTask(true);
  };

  const onDragEnd = (event: DragEvent<HTMLDivElement>) => {
    console.log("event", event);
    setIsDraggingTask(false);
  };

  return (
    <Card
      sx={{ marginBottom: 1 }}
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      // Eventos drag
    >
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: "pre-line" }}>
            {entry.description}
          </Typography>
        </CardContent>

        <CardActions
          sx={{ display: "flex", justifyContent: "end", paddingRight: 2 }}
        >
          <Typography variant="body2">
            created:
            {formatDistanceToNow(entry.createdAt, { addSuffix: true })}
          </Typography>
          <Typography variant="body2">
            {entry.updatedAt > 0
              ? `updated: ${formatDistanceToNow(entry.updatedAt, {
                  addSuffix: true,
                })}`
              : ""}
          </Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};
