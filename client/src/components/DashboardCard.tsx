import { ReactNode } from "react";
import "../css/DashboardCard.css";

interface DashboardCardProps {
    children: ReactNode;
    width: "12-5" | 25 | 50 | 75; // in percentage, these are the only options accepted
}

function DashboardCard({ children, width }: DashboardCardProps) {
    return (
        <div className={"card w-" + width}>
            <div className="card-body">{children}</div>
        </div>
    );
}

export default DashboardCard;
