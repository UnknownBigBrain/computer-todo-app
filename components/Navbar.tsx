// Main
import React, { useEffect, useState } from "react";
import {
  AppBar,
  Box,
  Button,
  TextField,
  Toolbar,
  tooltipClasses,
} from "@mui/material";

const NavBar = () => {
  return (
    <AppBar>
      <Toolbar sx={{ bgcolor: "#fafafa", p: 0, m: 0 }}>
        <Box className="flex items-center justify-center w-full overflow-hidden">
          <img src="./logo-2.jpeg" className="w-[350px]  scale-110" />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
