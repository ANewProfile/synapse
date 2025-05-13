import { useState, useEffect } from "react";
import "../css/base.css";

interface PomoTimerProps {
    workTime?: number;
    breakTime?: number;
}

function PomoTimer({ workTime = 1500, breakTime = 300 }: PomoTimerProps) {
    const [secondsLeft, setSecondsLeft] = useState(workTime); // Set default secondsLeft to 25 min
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
                    return nextIsWork ? workTime : breakTime; // set the next seconds left to 25 min if work next, 5 min if break next
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
        setSecondsLeft(workTime);
    };

    function format(sec: number) {
        const minutes = String(Math.floor(sec / 60)).padStart(2, "0");
        const seconds = String(sec % 60).padStart(2, "0");
        return `${minutes}:${seconds}`;
    }

    return (
        <div className="flex flex-col justify-center items-center text-center h-full">
            <h1 className="mb-2">{isWork ? "Work" : "Break"}</h1>
            <div style={{ fontSize: "4rem" }}>{format(secondsLeft)}</div>
            <div className="mt-3">
                <button onClick={startPause} className="btn btn-primary">
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
