import { ReactNode } from "react";

interface DashboardRowProps {
    children: ReactNode;
    className?: string;
}

function DashboardRow({ children, className = "" }: DashboardRowProps) {
    return (
        <div className={`dashboard-row ${className}`}>{children}</div>
    );
}

export default DashboardRow;
