import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="custom-navbar">
      <div className="custom-navbar-brand">
        <Link to="/">Logo Here</Link>
      </div>

      <button
        className="custom-navbar-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      <div className={`custom-navbar-links ${isOpen ? "open" : ""}`}>
        <Link
          to="/"
          className="custom-nav-link"
          onClick={() => setIsOpen(false)}
        >
          Dashboard
        </Link>
        <Link
          to="/pomodoro"
          className="custom-nav-link"
          onClick={() => setIsOpen(false)}
        >
          Pomodoro Timer
        </Link>
        <Link
          to="/notes"
          className="custom-nav-link"
          onClick={() => setIsOpen(false)}
        >
          Notes
        </Link>
        <Link
          to="/tasks"
          className="custom-nav-link"
          onClick={() => setIsOpen(false)}
        >
          Tasks
        </Link>
        <Link
          to="/logout"
          className="custom-nav-link"
          onClick={() => setIsOpen(false)}
        >
          Log Out
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
