function ClockHand({ angle, type }) {
    return (
        <div className={`clockHand clockHand-${type}`} style={{transform: `rotate(${angle}deg)`}}></div>
    );
}

export default ClockHand;
