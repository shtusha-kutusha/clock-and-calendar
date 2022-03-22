const dayWeekArr = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

function DayWeek({ dayWeek }) {
    return (
        <>
            {dayWeekArr[dayWeek]}
        </>
    );
}

export default DayWeek;