import DashboardCard from "../components/DashboardCard";
import DashboardRow from "../components/DashboardRow";
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
                <DashboardCard width={25}>Pomo timer</DashboardCard>
                <DashboardCard width={75}>Tasks</DashboardCard>
            </DashboardRow>
        </div>
    );
}

export default Dashboard;
