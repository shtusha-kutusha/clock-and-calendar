import Hours from "./Hours/Hours";
import Minutes from "./Minutes/Minutes";
import Seconds from "./Seconds/Seconds";

function Time({ time }) {
    const fullHours = time.getHours();
    const fullMinutes = time.getMinutes();
    const fullSeconds = time.getSeconds();

    return (
        <div className="digitalClock">
            <Hours hour={fullHours} />
            :
            <Minutes minute={fullMinutes} />
            :
            <Seconds second={fullSeconds} />
        </div>
    );
}

export default Time;