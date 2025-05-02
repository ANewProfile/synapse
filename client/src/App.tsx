import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PomoTimerPage from "./pages/PomoTimerPage";
import { Routes, Route, Navigate } from "react-router-dom";
import "./css/App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        //yea the url needs to be adjusted on later
        //this part is to check if already logged in or not
        axios
            .get("http://localhost:3000/api/getme")
            .then((res) => {
                setUser(res.data);
            })
            .catch((error) => {
                setUser(null);
                console.log("User Auth frontend error");
            });
    }, []);

    //navigate dont work outside routes huh
    /** 
  if (!user) {
    return (
      <>
        <Navigate to="/signup" replace />
      </>
    );
  }*/
    return (
        <div className="d-flex flex-column">
            <Navbar />{" "}
            <main className="main-content flex-grow-1 d-flex flex-column">
                {/**this part needs to be responsive on phone max col for grid 2  */}
                <Routes>
                    <Route
                        path="/"
                        element={
                            !user ? <Dashboard /> : <Navigate to="/login" />
                        }
                    />
                    <Route path="/pomodoro" element={<PomoTimerPage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/logout" element={<Login />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
