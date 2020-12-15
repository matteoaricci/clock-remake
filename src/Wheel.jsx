import React from "react";

// width, values, initial value

const Wheel = (props) => {
  const currentTime = (ind) => {
    if (props.time === ind + 1) {
        return props.wheelType + " current-time"
    } else {
        return props.wheelType
    }
  };

  const rotateAmount = 360/props.values.length

  return (
    <div>
      <div>{props.time}</div>
      {props.values.map((time, index) => {
        return (
          <div
            className={currentTime(index)}
            key={time}
            style={{ transform: `rotate(${rotateAmount * (props.time - index - 1)}deg)` }}
          >
            {time}
          </div>
        );
      })}
    </div>
  );
};

export default Wheel;
