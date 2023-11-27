import { UIContext } from "@/context/ui";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { useContext } from "react";

const menuItem: String[] = ["Inbox", "Starred", "Send email", "Drafts"];

export const Sidebar = () => {
  const { sidemenuOpen, toggleSidebar } = useContext(UIContext);

  return (
    <Drawer anchor="left" open={sidemenuOpen} onClose={toggleSidebar}>
      <Box sx={{ width: 250 }}>
        <Box sx={{ padding: "5px 10px" }}>
          <Typography variant="h4" color="primary">
            Menu
          </Typography>
        </Box>
        <List>
          {menuItem.map((text, index) => (
            <ListItem key={text + `${index}`}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};
