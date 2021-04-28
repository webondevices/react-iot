import React, { useState, useRef, useEffect } from "react";
import five from "johnny-five";
import Led from "./Led.js";
import Sensor from "./Sensor.js";

const World = () => {
  const [arduinoInstance] = useState(() => new five.Board());
  const arduinoRef = useRef(arduinoInstance);

  const [isReady, setIsReady] = useState(false);
  const [lightLevel, setLightLevel] = useState(0);

  useEffect(() => {
    arduinoRef.current.on("ready", () => {
      setIsReady(true);
    });
  }, []);

  return (
    isReady && (
      <React.Fragment>
        <Led pin="6" poweredOn={lightLevel < 150} />
        <Sensor pin="A0" onChange={setLightLevel} />
      </React.Fragment>
    )
  );
};

export default World;
