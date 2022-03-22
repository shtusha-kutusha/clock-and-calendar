import CalendarDay from "./CalendarDay/CalendarDay";

function Calendar({ time }) {
    const dayCount = (new Date(time.getFullYear(), time.getMonth() + 1, 0)).getDate();
    const firstWeekday = (new Date(time.getFullYear(), time.getMonth(), 1)).getDay();
    let weekday = firstWeekday;
    const month = [];
    for (let i = 1; i <= dayCount; i++) {
        month.push(<CalendarDay date={i} weekday={weekday} today={time.getDate()} key={i} />);
        weekday = weekday === 6 ? 0 : weekday + 1;
    }
    const className = firstWeekday === 0 ? 'calendar' : `calendar calendar-shift`;

    return (
        <div className={className} style={{ "--shift": firstWeekday + 1 }}>
            {month}
        </div>
    )
}

export default Calendar;