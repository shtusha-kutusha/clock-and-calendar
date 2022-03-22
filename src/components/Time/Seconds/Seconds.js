import { showTime } from "../../../utils/time";

function Seconds({ second }) {
    return (
        <>
            {showTime(second)}
        </>
    );
}

export default Seconds;