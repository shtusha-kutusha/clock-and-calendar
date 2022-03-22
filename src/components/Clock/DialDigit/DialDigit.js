function DialDigit({ hour, angle }) {
    return (
        <div className="clockDigit" style={{transform: `rotate(${angle}deg)`}}>
            {hour}
        </div>
    );
}

export default DialDigit;