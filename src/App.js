import { Component } from "react";
import "./App.css";
import { useState, useEffect } from "react";
import Wheel from './Wheel'

function App() {
  const d = new Date();

  const [seconds, setSeconds] = useState("");
  const [minutes, setMinutes] = useState("");
  const [hours, setHours] = useState("");

  useEffect(() => {
    setSeconds(Math.floor(d.getSeconds()));
    setMinutes(d.getMinutes());
    setHours(d.getHours());
  }, []);

  setTimeout(() => {
    setSeconds(d.getSeconds());
    setMinutes(d.getMinutes());
    setHours(d.getHours());
  }, 1000);

  return (
    <div className="App">
      <Wheel values={[...Array(60).keys()].map(sec => {
        return 1 + sec + " seconds"
      })} time={seconds}/>
      {/* <Wheel values={[...Array(60).keys()].map(sec => {
        return 1 + sec + " minutes"
      })} time={minutes}/>
      <Wheel values={[...Array(24).keys()].map(sec => {
        return 1 + sec + " hours"
      })} time={hours}/> */}
    </div>
  );
}

export default App;
