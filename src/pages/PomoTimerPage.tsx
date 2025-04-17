import PomoTimer from "../components/PomoTimer";
import { useState, useEffect } from "react";

function PomoTimerPage() {
    const [workTime, setWorkTime] = useState(1500);
    const [breakTime, setBreakTime] = useState(300);
    const [newWorkTime, setNewWorkTime] = useState(15);
    const [newBreakTime, setNewBreakTime] = useState(3);

    const handleWorkTimeSubmit = () => {
        setWorkTime(newWorkTime);
        setBreakTime(newBreakTime);
    };

    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <form onSubmit={handleWorkTimeSubmit}>
                <label>Work Time</label>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="MM"
                        aria-label="Minutes"
                    />
                    <input
                        type="text"
                        className="form-control"
                        placeholder="SS"
                        aria-label="Seconds"
                    />
                    <button className="btn btn-primary">Submit</button>
                </div>

                <label>Break Time</label>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="MM"
                        aria-label="Minutes"
                    />
                    <input
                        type="text"
                        className="form-control"
                        placeholder="SS"
                        aria-label="Seconds"
                    />
                    <button className="btn btn-primary">Submit</button>
                </div>
            </form>

            <PomoTimer workTime={workTime} breakTime={breakTime} />
        </div>
    );
}

export default PomoTimerPage;
