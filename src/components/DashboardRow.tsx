import { ReactNode } from "react";

interface DashboardRowProps {
    children: ReactNode;
    className?: string;
}

function DashboardRow({ children, className = "" }: DashboardRowProps) {
    return (
        <div className={`d-flex flex-row gap-2 ${className}`}>{children}</div>
    );
}

export default DashboardRow;
