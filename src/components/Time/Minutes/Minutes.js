import { showTime } from "../../../utils/time";

function Minutes({ minute }) {
    return (
        <>
            {showTime(minute)}
        </>
    );
}

export default Minutes;