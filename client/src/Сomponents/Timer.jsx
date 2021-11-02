import React, { useEffect, useRef, useState } from "react";

function Timer() {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countDownDate = new Date("October 31, 2021 00:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div className="timer">
      <div className="timer__container">
        <section className="timer__days">
          <div className="timer__num">{timerDays}</div>
          <div className="timer__text">Days</div>
        </section>
        <section className="timer__hours">
          <div className="timer__num">{timerHours}</div>
          <div className="timer__text">Hours</div>
        </section>
        <section className="timer__minutes">
          <div className="timer__num">{timerMinutes}</div>
          <div className="timer__text">Minutes</div>
        </section>
        <section className="timer__seconds">
          <div className="timer__num">{timerSeconds}</div>
          <div className="timer__text">Seconds</div>
        </section>
      </div>
    </div>
  );
}

export default Timer;
