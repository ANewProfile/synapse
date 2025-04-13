import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Routes, Route } from "react-router-dom";
import "./css/App.css";

function App() {
    return (
        <div>
            <Navbar />
            <main className="main-content">
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route
                        path="/logout"
                        element={<p>LOGOUT NOT IMPLEMENTED</p>}
                    />
                </Routes>
            </main>
        </div>
    );
}

export default App;
