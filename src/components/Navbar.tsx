import { Link } from "react-router-dom";
import "../css/Navbar.css";

function Navbar() {
    return (
        <nav className="custom-navbar">
            <div className="custom-navbar-brand">
                <Link to="/">Logo Here</Link>
            </div>
            <div className="custom-navbar-links">
                <Link to="/" className="custom-nav-link">
                    Dashboard
                </Link>
                <Link to="/logout" className="custom-nav-link">
                    Log Out
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
