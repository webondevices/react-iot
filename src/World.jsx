import React, { useState, useRef, useEffect } from "react";
import five from "johnny-five";
import Led from "./Led.js";
import Sensor from "./Sensor.js";

const World = () => {
  const [arduinoInstance] = useState(() => new five.Board());
  const arduinoRef = useRef(arduinoInstance);

  const [isReady, setIsReady] = useState(false);
  const [lightLevel, setLightLevel] = useState(0);
  const [moistureLevel, setMoistureLevel] = useState(0);

  useEffect(() => {
    arduinoRef.current.on("ready", () => {
      setIsReady(true);
    });
  }, []);

  console.log(lightLevel, moistureLevel);

  return (
    <div>
      {isReady && (
        <div>
          <Led pin="5" poweredOn={moistureLevel > 1000} />
          <Led pin="6" poweredOn={lightLevel < 100} />
          <Sensor pin="A0" onChange={setLightLevel} />
          <Sensor pin="A1" onChange={setMoistureLevel} />
        </div>
      )}
    </div>
  );
};

export default World;
