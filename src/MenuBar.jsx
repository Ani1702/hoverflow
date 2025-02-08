export default function MenuBar() {
  return (
    <>
      <div className="flex justify-between">
        <div className="w-60 bg-red-900 h-screen p-8">
          {/* <h1>Traffic Police 1</h1>
          <p>Brookfield, Bangalore</p> */}
        </div>

        <div className="w-full bg-black p-12">
          <div>
            <h1 className="font-bold text-4xl mb-8">Dashboard</h1>
            <div className="flex gap-x-4">
              <div className="border border-red-600 rounded-2xl p-4 w-40 backdrop-blur-2xl">
                <p className="font-semibold mb-1 text-amber-100 ">
                  Road Density
                </p>
                <hr className="mb-2" />
                <p>90 cars</p>
              </div>
              <div className="border border-red-600 rounded-2xl p-4 w-40 backdrop-blur-2xl">
                <p className="font-semibold mb-1 text-amber-100 ">
                  Road Density
                </p>
                <hr className="mb-2" />
                <p>90 cars</p>
              </div>{" "}
              <div className="border border-red-600 rounded-2xl p-4 w-40 backdrop-blur-2xl">
                <p className="font-semibold mb-1 text-amber-100 ">
                  Live Cameras
                </p>
                <hr className="mb-2" />
                <p>1054</p>
              </div>{" "}
              <div className="border border-red-600 rounded-2xl p-4 w-40 backdrop-blur-2xl">
                <p className="font-semibold mb-1 text-amber-100 ">Accidents</p>
                <hr className="mb-2" />
                <p>90 cars</p>
              </div>
            </div>

            <div className="mt-8 p-4 border border-red-500 rounded-2xl h-[50vh]">
              Live Camera Footage
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
