"use client";
import { AppBar, Box, IconButton, SwipeableDrawer, Toolbar } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const Navbar = () => {
  const router = useRouter();
  const anchor = "left";
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <MenuIcon />
          </IconButton>

          <Button color="inherit" onClick={() => router.push("/")}>
            <Typography variant="h6" component="div">
              Cookie Master
            </Typography>
          </Button>
          <Box sx={{ flexGrow: 1 }}></Box>
          <Button color="inherit" onClick={() => router.push("/theme-changer")}>
            <Typography component="div">Cambiar Tema</Typography>
          </Button>
        </Toolbar>
      </AppBar>
      <SwipeableDrawer
        anchor={anchor}
        open={navbarOpen}
        onClose={() => setNavbarOpen(false)}
        onOpen={() => setNavbarOpen(true)}
      >
        <div style={{ width: "300px" }}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident soluta, rerum ipsam
            facilis ipsa atque sint consequatur? Non in ab itaque sint omnis! Obcaecati, perferendis
            perspiciatis illum nam reiciendis libero?
          </p>
        </div>
      </SwipeableDrawer>
    </>
  );
};
