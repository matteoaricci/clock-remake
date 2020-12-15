import React from "react";

// width, values, initial value

const Wheel = (props) => {
  const currentTime = (ind) => {
    if (props.time === ind + 1) {
        return "seconds current-time"
    } else {
        return "seconds"
    }
  };

  return (
    <div>
      {props.time}
      {props.values.map((time, index) => {
        return (
          <div
            className={currentTime(index)}
            key={time}
            style={{ transform: `rotate(${6 * (props.time - index)}deg)` }}
          >
            {time}
          </div>
        );
      })}
    </div>
  );
};

export default Wheel;
