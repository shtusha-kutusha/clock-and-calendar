export function showTime(time) {
    const showTime = time <= 9 ? '0' + time : time;
    return showTime;
}
