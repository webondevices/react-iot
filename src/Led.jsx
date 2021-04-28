import { useState, useRef, useEffect } from "react";
import five from "johnny-five";

const Led = ({ pin, poweredOn }) => {
  const [ledInstance] = useState(() => new five.Led(pin));
  const ledRef = useRef(ledInstance);

  useEffect(() => {
    ledRef.current = new five.Led(pin);
  }, [pin]);

  useEffect(() => {
    if (poweredOn) {
      ledRef.current.on();
    } else {
      ledRef.current.off();
    }
  }, [poweredOn]);

  return null;
};

export default Led;
