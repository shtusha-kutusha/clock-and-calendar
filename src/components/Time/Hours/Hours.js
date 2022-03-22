import { showTime } from "../../../utils/time";

function Hours({ hour }) {
    return (
        <>
            {showTime(hour)}
        </>
    );
}

export default Hours;