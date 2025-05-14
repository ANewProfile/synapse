import { ReactNode } from "react";
import "../css/DashboardCard.css";

interface DashboardCardProps {
    children: ReactNode;
    className?: string;
    width: "12-5" | 25 | 33.33 | 50 | 66.66 | 75; // in percentage, these are the only options accepted
}

function DashboardCard({
    children,
    width,
    className = "",
}: DashboardCardProps) {
    // Handle special cases for decimal width values
    let widthClass;
    if (width === "12-5") {
        widthClass = "w-12-5";
    } else if (width === 33.33) {
        widthClass = "w-33-33";
    } else if (width === 66.66) {
        widthClass = "w-66-66";
    } else {
        widthClass = `w-${width}`;
    }
    return (
        <div className={`dashboard-card ${widthClass} ${className}`}>
            {children}
        </div>
    );
}

export default DashboardCard;
