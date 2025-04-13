import { Link } from "react-router-dom";
import "../css/Navbar.css";

function Navbar() {
    return (
        <nav className="bg-black px-4 py-3 d-flex justify-content-between align-items-center shadow-sm">
            <div className="fs-3 fw-bold">
                <Link to="/">Logo Here</Link>
            </div>
            <div className="d-flex gap-4">
                <Link to="/" className="nav-link">
                    Dashboard
                </Link>
                <Link to="/logout" className="nav-link">
                    Log Out
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
