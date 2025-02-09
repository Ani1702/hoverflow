import { useEffect, useRef } from "react";
import LaneAllocation from "./LaneAllocation";

export default function MenuBar() {
  const imgRef = useRef(null);

  useEffect(() => {
    let frameId;

    const updateFrame = () => {
      if (imgRef.current) {
        imgRef.current.src = `http://127.0.0.1:1000/video_feed?time=${new Date().getTime()};`;
      }
      frameId = requestAnimationFrame(updateFrame);
    };

    updateFrame(); // Start fetching frames

    return () => cancelAnimationFrame(frameId); // Cleanup on unmount
  }, []);

  return (
    <div className="flex justify-between">
      <div className="w-60 bg-red-900 h-screen p-8"></div>

      <div className="w-full bg-black p-12">
        <div>
          <h1 className="font-bold text-4xl mb-8 text-white">Dashboard</h1>
          <div className="flex gap-x-4">
            <div className="border border-red-600 rounded-2xl p-4 w-40 backdrop-blur-2xl text-white">
              <p className="font-semibold mb-1 text-amber-100">Road Density</p>
              <hr className="mb-2" />
              <p>90 cars</p>
            </div>
            <LaneAllocation />
            <div className="border border-red-600 rounded-2xl p-4 w-40 backdrop-blur-2xl text-white">
              <p className="font-semibold mb-1 text-amber-100">Live Cameras</p>
              <hr className="mb-2" />
              <p>1054</p>
            </div>
            <div className="border border-red-600 rounded-2xl p-4 w-40 backdrop-blur-2xl text-white">
              <p className="font-semibold mb-1 text-amber-100">Accidents</p>
              <hr className="mb-2" />
              <p>12</p>
            </div>
          </div>

          <div className="mt-8 p-4 border border-red-500 rounded-2xl h-[50vh] flex justify-center items-center">
            <img ref={imgRef} alt="Video Stream" />
          </div>
        </div>
      </div>
    </div>
  );
}
