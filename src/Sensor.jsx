import { useState, useRef, useEffect } from "react";
import five from "johnny-five";

const LightSensor = ({ pin, onChange }) => {
  const sensorSettings = {
    pin,
    freq: 1000,
  };
  const [sensorInstance] = useState(() => new five.Sensor(sensorSettings));
  const sensorRef = useRef(sensorInstance);

  useEffect(() => {
    sensorRef.current = new five.Sensor(sensorSettings);
  }, [pin]);

  useEffect(() => {
    sensorRef.current.on("data", onChange);
  }, [onChange]);

  return null;
};

export default LightSensor;
