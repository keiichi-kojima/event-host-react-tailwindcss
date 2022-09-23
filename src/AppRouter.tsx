import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import EventPage from "./components/pages/EventPage";
import LandingPage from "./components/pages/LandingPage";

export default function (): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/event" element={<EventPage />} />
      </Routes>
    </Router>
  );
}
