import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function Header() {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          style={{ textDecoration: "none", color: "white", flexGrow: 1 }}
        >
          Cruise Ship
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/event">
          Events
        </Button>
        <Button color="inherit" component={Link} to="/book">
          Book
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
