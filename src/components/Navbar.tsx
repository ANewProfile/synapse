import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">Logo Here</Link>
            </div>
            <div className="navbar-links">
                <Link to="/" className="nav-link">
                    Home
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
