import { useState, useEffect } from "react";

function PomoTimer() {
    const [secondsLeft, setSecondsLeft] = useState(1500); // Set default secondsLeft to 25 min
    const [isRunning, setIsRunning] = useState(false); // Set default isRunning to false
    const [isWork, setIsWork] = useState(true); // Set default isWork to true

    useEffect(() => {
        if (!isRunning) {
            return;
        }
        const id = setInterval(() => {
            setSecondsLeft((sec) => {
                if (sec === 0) {
                    // switch mode
                    const nextIsWork = !isWork && true;
                    setIsWork(nextIsWork);
                    return nextIsWork ? 1500 : 300; // set the next seconds left to 25 min if work next, 5 min if break next
                }
                return sec - 1; // if the timer isn't done, return the next secondsLeft
            });
        }, 1000);
        return () => clearInterval(id);
    }, [isRunning, isWork]);

    const startPause = () => setIsRunning((running) => !running);
    const reset = () => {
        setIsRunning(false);
        setIsWork(true);
        setSecondsLeft(1500);
    };

    function format(sec: number) {
        const minutes = String(Math.floor(sec / 60)).padStart(2, "0");
        const seconds = String(sec % 60).padStart(2, "0");
        return `${minutes}:${seconds}`;
    }

    return (
        <div
            className="d-flex flex-column justify-content-center align-items-center text-center"
            style={{ height: "100%" }}
        >
            <h1 className="mb-2">{isWork ? "Work" : "Break"}</h1>
            <div style={{ fontSize: "4rem" }}>{format(secondsLeft)}</div>
            <div className="mt-3">
                <button onClick={startPause} className="btn btn-primary me-3">
                    {isRunning ? "Pause" : "Play"}
                </button>
                <button onClick={reset} className="btn btn-secondary">
                    Reset
                </button>
            </div>
        </div>
    );
}

export default PomoTimer;
