import { useState } from "react";
import Time from "./components/Time/Time";
import DateDisplay from "./components/Date/Date";
import Clock from "./components/Clock/Clock";
import Calendar from "./components/Calendar/Calendar";

function App() {
  const [time, setTime] = useState(new Date(Date.now()));

  const fullYear = time.getFullYear();
  const fullMonth = time.getMonth();
  const fullDate = time.getDate(); 
  const fullHours = time.getHours();
  const fullMinutes = time.getMinutes();
  const fullSeconds = time.getSeconds();
  const dateTime = `${fullYear}-${fullMonth + 1}-${fullDate}T${fullHours}:${fullMinutes}:${fullSeconds}`;

  function updateTime() {
      setTime(new Date(Date.now()));
  }

  setInterval(updateTime, 1000);

  return (
    <div className="app">
      <Clock time={time} count={12} /> 
      <time dateTime={dateTime} className="time"> 
        <Time time={time} />
        <DateDisplay time={time} />
      </time>
      <Calendar time={time} />
    </div>
  );
}

export default App;
