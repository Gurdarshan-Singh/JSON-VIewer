import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: "#041014" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <img
            src="https://news.mpac.ca/image/6329923.1600373458000/MPACLogo.png"
            alt="MPAC logo"
            width={100}
            style={{marginRight: 10}}
          />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            JSON Viewer
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
