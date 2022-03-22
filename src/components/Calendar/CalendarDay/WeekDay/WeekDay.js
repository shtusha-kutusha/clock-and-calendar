const WeekdayArr = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

function WeekDay({ weekday }) {
    return (
        <>
            {WeekdayArr[weekday]}
        </>
    );
}

export default WeekDay;