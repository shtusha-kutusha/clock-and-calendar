import DialDigit from "../DialDigit/DialDigit";

function ClockFace({ count }) {
    const angle = 360 / count;
    const step = 12 / count;
    const hours = [];
    for (let i = 1; i <= count; i++) {
        hours.push(<DialDigit hour={i * step} angle={i * angle} key={i} />);
    }
    
    return hours;
}

export default ClockFace;