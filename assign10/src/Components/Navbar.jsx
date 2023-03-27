import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#20232a" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Website
          </Typography>
          <Box display={{xs:"none",md:"block"}}>
            <Button color="inherit">HOME</Button>
            <Button color="inherit">ABOUT</Button>
            <Button color="inherit">CONTACT</Button>
          </Box>
          <IconButton sx={{display:{xs:"block",md:"none"},color:"white"}}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
