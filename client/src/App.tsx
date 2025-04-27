import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PomoTimerPage from "./pages/PomoTimerPage";
import { Routes, Route } from "react-router-dom";
import "./css/App.css";

function App() {
    return (
        <div className="d-flex flex-column" style={{ height: "100vh" }}>
            <Navbar />
            <main className="main-content flex-grow-1 d-flex flex-column">
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/pomodoro" element={<PomoTimerPage />} />
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
