import {
  Divider,
  Drawer,
  IconButton,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

export default function DrawerComponent({ open, toggleDrawer }: any) {
  return (
    <div>
      <Drawer anchor="bottom" open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            p: 2,
            height: 1,
          }}
        >
          <IconButton sx={{ mb: 2 }}>
            <CloseIcon onClick={toggleDrawer(false)} />
          </IconButton>

          <Divider sx={{ mb: 2 }} />

          <Box sx={{ mb: 2 }}>
            <ListItemButton>
              <ListItemText primary="About Us" />
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="Our Expertise" />
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="What we offer" />
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="Contact us" />
            </ListItemButton>
          </Box>
        </Box>
      </Drawer>
    </div>
  );
}
