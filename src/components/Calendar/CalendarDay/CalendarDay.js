import MonthDay from "./MonthDay/MonthDay";
import WeekDay from "./WeekDay/WeekDay";

function CalendarDay({ date, weekday, today }) {
    const className = today === date ? "monthday today" : "monthday";  

    return (
        <div className={className}>
            <div>
                <WeekDay weekday={weekday} />
            </div>
            <div>
                <MonthDay date={date} />
            </div>
        </div>
    );
}

export default CalendarDay;