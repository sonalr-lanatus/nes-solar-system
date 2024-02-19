"use client";
import React, { useContext, useState } from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import Link from "next/link";
import { GlobalContext } from "../context/GlobalContextProvider";
import { ListItemIcon } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

function Header() {
  const [open, setOpen] = useState(false);
  const { stickyHeader } = useContext(GlobalContext);

  const toggleDrawer = (open: any) => (event: any) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(open);
  };

  return (
    <div>
      <nav>
        <div
          className={`w-full flex items-center justify-between p-4 mx-auto animate-fadeIn md:flex ${
            stickyHeader &&
            "fixed  bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm transition dark:bg-gray-dark dark:shadow-sticky-dark"
          } ${stickyHeader && open ? "z-[290]" : "z-[9999]"}`}
        >
          <div className="flex items-center rtl:space-x-reverse m-auto ">
            <Link href="/">
              <img
                src="../assets/nes-solar-header-logo-35420220703.png"
                className="w-36"
                alt="solar logo"
              />
            </Link>
          </div>

          <div className="md:w-auto md:flex md:items-center md:space-x-8 rtl:space-x-reverse">
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          </div>

          <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
            <Box sx={{ p: 2, height: 1 }}>
              <IconButton sx={{ mb: 2 }}>
                <CloseIcon onClick={toggleDrawer(false)} />
              </IconButton>

              <Divider sx={{ mb: 2 }} />

              <Box sx={{ mb: 2, color: "#203F69" }}>
                <ListItemButton>
                  <Link href="/About">
                    <ListItemText
                      sx={{ fontWeight: "500" }}
                      primary="About Us"
                    />
                  </Link>
                </ListItemButton>
                <ListItemButton>
                  <Link href="/Expertise">
                    <ListItemText
                      sx={{ fontWeight: "500" }}
                      primary="Our Expertise"
                    />
                  </Link>
                </ListItemButton>
                <ListItemButton>
                  <ListItemText
                    sx={{ fontWeight: "500" }}
                    primary="What we offer"
                  />
                </ListItemButton>
                <ListItemButton>
                  <Link href="/Contact">
                    <ListItemText
                      sx={{ fontWeight: "500" }}
                      primary="Contact us"
                    />
                  </Link>
                </ListItemButton>
                <ListItemButton>
                  <Link href="/Projects">
                    <ListItemText
                      sx={{ fontWeight: "500" }}
                      primary="Gallery"
                    />
                  </Link>
                </ListItemButton>
                <ListItemButton>
                  <Link href="/Awards">
                    <ListItemText sx={{ fontWeight: "500" }} primary="Awards" />
                  </Link>
                </ListItemButton>
              </Box>
            </Box>
          </Drawer>
        </div>
      </nav>
    </div>
  );
}

export default Header;
