import PomoTimer from "../components/PomoTimer";
import { useState, useEffect } from "react";

function PomoTimerPage() {
    const [workTime, setWorkTime] = useState(1500);
    const [breakTime, setBreakTime] = useState(300);
    const [newWorkTime, setNewWorkTime] = useState(25);
    const [newBreakTime, setNewBreakTime] = useState(5);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setWorkTime(newWorkTime * 60);
        setBreakTime(newBreakTime * 60);
    };

    useEffect(() => {
        setWorkTime(newWorkTime);
        setBreakTime(newBreakTime);
    }, []);

    return (
        <div className="d-flex flex-column justify-content-center align-items-center gap-5">
            <form
                onSubmit={handleSubmit}
                className="row g-2 align-items-end mb-4"
            >
                <div className="col-auto">
                    <label>Work Time</label>
                    <input
                        type="text"
                        className="form-control"
                        aria-label="Minutes"
                        value={newWorkTime}
                        onChange={(e) => setNewWorkTime(+e.target.value)}
                    />
                </div>

                <div className="col-auto">
                    <label>Break Time</label>
                    <input
                        type="text"
                        className="form-control"
                        aria-label="Minutes"
                        value={newBreakTime}
                        onChange={(e) => setNewBreakTime(+e.target.value)}
                    />
                </div>
                <div className="col-auto">
                    <button type="submit" className="btn btn-primary">
                        Update
                    </button>
                </div>
            </form>

            <PomoTimer workTime={workTime} breakTime={breakTime} />
        </div>
    );
}

export default PomoTimerPage;
