import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

function CalendarWidget() {
    const [date, setDate] = useState<Date | undefined>(new Date());

    return (
        <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md shadow text-white"
        />
    );
}

export default CalendarWidget;
