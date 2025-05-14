import DashboardCard from "../components/DashboardCard";
import DashboardRow from "../components/DashboardRow";
import PomoTimer from "../components/PomoTimer";
import Quotes from "../components/Quotes";
import "../css/Dashboard.css";

function Dashboard() {
    return (
        <div className="dashboard">
            <DashboardRow>
                <DashboardCard width={66.66}>Quick Note</DashboardCard>
                <DashboardCard width={33.33}>Calendar</DashboardCard>
            </DashboardRow>
            <DashboardRow>
                <DashboardCard
                    width={33.33}
                    className="flex flex-col justify-center items-center h-full"
                >
                    <div className="h-full flex items-center justify-center w-1/2">
                        <Quotes />
                    </div>
                </DashboardCard>
                <DashboardCard width={33.33}>Tasks</DashboardCard>
                <DashboardCard
                    width={33.33}
                    className="flex justify-center items-center h-full"
                >
                    <PomoTimer />
                </DashboardCard>
            </DashboardRow>
        </div>
    );
}

export default Dashboard;
