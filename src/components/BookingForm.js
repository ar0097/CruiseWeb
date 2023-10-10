import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import emailjs from "emailjs-com";

function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    cruiseCategory: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_76z8z6j",
        "template_kizb1yd",
        {
          user_name: formData.name,
          user_email: formData.email,
          booking_details: `Category: ${formData.cruiseCategory}, Phone Number: ${formData.phoneNumber}`
        },
        "1cz2h0-lVL2A1Xvv2"
      )
      .then(
        (response) => {
          console.log("Email sent to owner:", response);
          alert("A mail has been sent");
        },
        (error) => {
          console.error("Error sending email to owner:", error);
        }
      );

    emailjs
      .send(
        "service_76z8z6j",
        "template_kizb1yd",
        {
          user_email: formData.email
        },
        "1cz2h0-lVL2A1Xvv2"
      )
      .then(
        (response) => {
          console.log("Confirmation email sent to user:", response);
          alert("A mail has been sent");
        },
        (error) => {
          console.error("Error sending confirmation email to user:", error);
        }
      );

    setFormData({
      name: "",
      phoneNumber: "",
      email: "",
      cruiseCategory: ""
    });
  };

  return (
    <Box
      sx={{
        padding: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "linen"
      }}
    >
      <h1 style={{ marginBottom: 20 }}>Booking Details</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          sx={{ marginBottom: 2 }}
        />
        <TextField
          fullWidth
          label="Phone Number"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
          sx={{ marginBottom: 2 }}
        />
        <TextField
          fullWidth
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          sx={{ marginBottom: 2 }}
        />
        <FormControl fullWidth required>
          <InputLabel>Category of Cruise</InputLabel>
          <Select
            label="Category of Cruise"
            name="cruiseCategory"
            value={formData.cruiseCategory}
            onChange={handleChange}
            sx={{ marginBottom: 2 }}
          >
            <MenuItem value="Birthday Parties">Birthday Parties</MenuItem>
            <MenuItem value="Bridal Showers">Bridal Showers</MenuItem>
            <MenuItem value="Wedding Anniversaries">
              Wedding Anniversaries
            </MenuItem>
            <MenuItem value="Corporate Events">Corporate Events</MenuItem>
            <MenuItem value="Baby Showers">Baby Showers</MenuItem>
            <MenuItem value="Kitty Parties">Kitty Parties</MenuItem>
            <MenuItem value="Seminars">Seminars</MenuItem>
            <MenuItem value="Bachelorette Parties">
              Bachelorette Parties
            </MenuItem>
          </Select>
        </FormControl>
        <Button type="submit" variant="contained" color="primary">
          Book
        </Button>
      </form>
    </Box>
  );
}

export default BookingForm;
