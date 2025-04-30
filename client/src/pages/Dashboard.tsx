import DashboardCard from "../components/DashboardCard";
import DashboardRow from "../components/DashboardRow";
import PomoTimer from "../components/PomoTimer";
import "../css/Dashboard.css";

function Dashboard() {
    return (
        <div className="dashboard">
            <DashboardRow>
                <DashboardCard width={66.66}>Quick Note</DashboardCard>
                <DashboardCard width={33.33}>Calendar</DashboardCard>
            </DashboardRow>
            <DashboardRow>
                <DashboardCard width={33.33}>Motivation</DashboardCard>
                <DashboardCard width={33.33}>Tasks</DashboardCard>
                <DashboardCard width={33.33}>
                    <div
                        className="d-flex justify-content-center align-items-start"
                        style={{ height: "100%" }}
                    >
                        <PomoTimer />
                    </div>
                </DashboardCard>
            </DashboardRow>
        </div>
    );
}

export default Dashboard;
