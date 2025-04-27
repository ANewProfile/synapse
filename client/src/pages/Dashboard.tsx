import DashboardCard from "../components/DashboardCard";
import DashboardRow from "../components/DashboardRow";
import PomoTimer from "../components/PomoTimer";
import "../css/Dashboard.css";

function Dashboard() {
    return (
        <div className="dashboard d-flex flex-column h-100 gap-4">
            <DashboardRow className="h-50">
                <DashboardCard width={75}>Quick Note</DashboardCard>
                <DashboardCard width={"12-5"}>Calendar</DashboardCard>
                <DashboardCard width={"12-5"}>Motivation</DashboardCard>
            </DashboardRow>
            <DashboardRow className="h-50">
                <DashboardCard width={25}>
                    <div
                        className="d-flex justify-content-center align-items-start"
                        style={{ height: "100%" }}
                    >
                        <PomoTimer />
                    </div>
                </DashboardCard>
                <DashboardCard width={75}>Tasks</DashboardCard>
            </DashboardRow>
        </div>
    );
}

export default Dashboard;
