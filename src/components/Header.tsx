"use client";
import React, { useContext, useEffect, useState } from "react";
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

function Header() {
  const [open, setOpen] = useState(false);
  // const [sticky, setSticky] = useState(false);
  const { stickyHeader } = useContext(GlobalContext);
  // const handleStickyNavbar = () => {
  //   if (window.scrollY >= 80) {
  //     setSticky(true);
  //   } else {
  //     setSticky(false);
  //   }
  // };
  // useEffect(() => {
  //   window.addEventListener("scroll", handleStickyNavbar);
  // });
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
          className={` w-full flex flex-wrap items-center justify-between p-4 mx-auto animate-fadeIn md:flex ${
            stickyHeader &&
            "fixed z-[9999] bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm transition dark:bg-gray-dark dark:shadow-sticky-dark"
          }   `}
        >
          <div className="lg:contents">
            <Link
              href="/"
              className="flex items-center space-x-3 rtl:space-x-reverse m-auto "
            >
              <img
                src="../assets/nes-solar-header-logo-35420220703.png"
                className="w-36"
                alt="solar logo"
              />
            </Link>
          </div>

          <div
            className="   md:w-auto     rounded-lg px-3 py-[6px] ring-primary focus:ring-2 "
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
              <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer(true)}
                sx={{
                  mr: 2,
                }}
              >
                <MenuIcon />
              </IconButton>
            </ul>
          </div>
          <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
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
              </Box>
            </Box>
          </Drawer>
        </div>
      </nav>
    </div>
  );
}

export default Header;
