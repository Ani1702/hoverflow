import React, { useState, useEffect } from "react";

const TrafficDashboard = () => {
  const MAX_DENSITY = 100;
  const REALLOCATION_THRESHOLD = 80;
  const [density, setDensity] = useState(0);
  const [lanesAllocated, setLanesAllocated] = useState(2);

  useEffect(() => {
    const interval = setInterval(() => {
      setDensity((prevDensity) => {
        const newDensity = prevDensity + Math.floor(Math.random() * 10);
        return newDensity <= MAX_DENSITY ? newDensity : MAX_DENSITY;
      });
    }, 1000);

    if (density >= REALLOCATION_THRESHOLD) {
      setLanesAllocated((prevLanes) => prevLanes + 1);
    }

    return () => clearInterval(interval);
  }, [density]);

  return (
    <div>
      <div>
        <p>Current Road Density: {density}%</p>
        <div style={{ width: "100%", backgroundColor: "#ccc", height: "30px" }}>
          <div
            style={{
              width: `${density}%`,
              backgroundColor:
                density >= REALLOCATION_THRESHOLD ? "red" : "green",
              height: "100%",
            }}
          />
        </div>
      </div>
      <p>Currently Allocated Lanes: {lanesAllocated}</p>
    </div>
  );
};

export default TrafficDashboard;
