import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { eventData } from "../events.js";
import { Link } from "react-router-dom";
import "../styles.css";
function EventSection() {
  return eventData.map((event, index) => (
    <Link to="/book">
      <Card
        key={index}
        className="event-section"
        sx={{
          width: 300,
          margin: 5,
          display: "inline-block",
          boxSizing: "border-box"
        }}
      >
        <CardHeader
          title={event.name}
          subheader={`Category: ${event.catogary}`}
        />
        <CardMedia component="img" height="200" alt="event" src={event.image} />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {event.description}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Price: {event.price}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Rating: {event.rating}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  ));
}

export default EventSection;
