import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PomoTimerPage from "./pages/PomoTimerPage";
import { Routes, Route } from "react-router-dom";
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

  if (user) {
    return (
      <div className="d-flex flex-column" style={{ height: "120vh" }}>
        <Navbar /> <Signup />
      </div>
    );
  }
  return (
    <div className="d-flex flex-column" style={{ height: "120vh" }}>
      <Navbar />{" "}
      {/**dont use 100vh hardcoded for height here.. u can use full/100% for height */}
      <main className="main-content flex-grow-1 d-flex flex-column">
        {/**this part needs to be responsive on phone max col for grid 2  */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/pomodoro" element={<PomoTimerPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/logout" element={<p>LOGOUT NOT IMPLEMENTED</p>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
