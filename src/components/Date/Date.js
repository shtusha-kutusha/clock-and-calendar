import Day from "./Day/Day";
import Month from "./Month/Month";
import Year from "./Year/Year";
import DayWeek from "./DayWeek/DayWeek";

function DateDisplay({ time }) {
    const fullYear = time.getFullYear();
    const fullMonth = time.getMonth();
    const fullDate = time.getDate();

    return (
        <div className="date">
            <DayWeek dayWeek={time.getDay()} />&nbsp;
            <Day day={fullDate} />&nbsp;
            <Month month={fullMonth} />&nbsp;
            <Year year={fullYear} />
        </div>
    );
}

export default DateDisplay;