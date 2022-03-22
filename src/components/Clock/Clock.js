import ClockFace from "./ClockFace/ClockFace";
import ClockHand from "./ClockHand/ClockHand";

function Clock({ count, time }) {
    const hourAngle = 360 / 12;
    const minuteAngle = 360 / 60;
    const secondAngle = 360 / 60;
    return (
        <div className="clock">
            <ClockFace count={count} />
            <ClockHand angle={hourAngle * time.getHours()} type="hour" />
            <ClockHand angle={minuteAngle * time.getMinutes()} type="minute" />
            <ClockHand angle={secondAngle * time.getSeconds()} type="second" />
        </div>
    );
}

export default Clock;