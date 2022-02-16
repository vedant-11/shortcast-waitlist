import React, { Fragment } from "react";

const Clock = ({ timerDays, timerHours, timerMinutes, timerSeconds }) => {
  return (
    <div className="flex flex-row w-80 justify-center bg-transparent border mb-10 h-16 items-center poppins">
      <section className="bg-transparent mx-2">
        <p className="bg-transparent  text-center">{timerDays}</p>
        <small className="bg-transparent">Days</small>
      </section>
      <span className="bg-transparent">:</span>
      <section className="bg-transparent mx-2">
        <p className="bg-transparent text-center">{timerHours}</p>
        <small className="bg-transparent">Hours</small>
      </section>{" "}
      <span className="bg-transparent">:</span>
      <section className="bg-transparent mx-2">
        <p className="bg-transparent text-center">{timerMinutes}</p>
        <small className="bg-transparent">Minutes</small>
      </section>{" "}
      <span className="bg-transparent ">:</span>
      <section className="bg-transparent mx-2">
        <p className="bg-transparent text-center">{timerSeconds}</p>
        <small className="bg-transparent">Seconds</small>
      </section>
    </div>
  );
};

Clock.defaultProps = {
  timerDays: 10,
  timerHours: 10,
  timerMinutes: 10,
  timerSeconds: 10,
};

export default Clock;
