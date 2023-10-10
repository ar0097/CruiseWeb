import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <Box
      id="home"
      sx={{
        backgroundImage: `url('https://images.unsplash.com/photo-1548574505-12caf0050b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1933&q=80')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        color: "white",
        display: "flex",
        alignItems: "center"
      }}
    >
      <Container maxWidth="lg">
        <div className="hero-content">
          <Typography variant="h1" component="h1" gutterBottom>
            Welcome to Your Cruise Ship
          </Typography>
          <Typography variant="h5" paragraph>
            Your Premier Destination for Memorable Events
          </Typography>
          <Link to="/event">
            <Button variant="contained" color="primary" href="#contact">
              Book Now
            </Button>
          </Link>
        </div>
      </Container>
    </Box>
  );
}

export default Hero;
