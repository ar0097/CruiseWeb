import React from "react";
import Header from "./components/Header";
import EventSection from "./components/EventSection";
import Hero from "./components/Hero";
import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookingForm from "./components/BookingForm";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/book" element={<BookingForm />} />
          <Route path="/event" element={<EventSection />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
