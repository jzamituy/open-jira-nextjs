import { AppBar, IconButton, Toolbar } from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { useContext } from "react";
import { UIContext } from "@/context/ui";

export const NavBar = () => {
  const { toggleSidebar } = useContext(UIContext);

  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar>
        <IconButton size="large" edge="start" onClick={toggleSidebar}>
          <MenuOutlinedIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
