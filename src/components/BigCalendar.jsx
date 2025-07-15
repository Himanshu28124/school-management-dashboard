"use client"
import { Calendar, momentLocalizer, Views } from 'react-big-calendar'
import moment from 'moment'
import { calendarEvents } from "@/lib/data"
import "react-big-calendar/lib/css/react-big-calendar.css"
import { useState } from 'react'

const localizer = momentLocalizer(moment)

const BigCalendar = () => {
    const [view, setView] = useState(Views.WORK_WEEK)

    const handleOnChangeView = (selected) => {
        setView(selected)
    }

    return (
        <Calendar
            localizer={localizer}
            events={calendarEvents}
            startAccessor="start"
            endAccessor="end"
            views={[Views.WORK_WEEK, Views.DAY]}  // ✅ use Views constants
            view={view}
            onView={handleOnChangeView}
            style={{ height: "98%" }}
            min={new Date(0, 0, 0, 8, 0, 0)}     // ✅ just to clamp time to 8 AM
            max={new Date(0, 0, 0, 17, 0, 0)}    // ✅ up to 5 PM
            defaultDate={new Date(2025, 7, 12)}
        />
    );
}

export default BigCalendar;
