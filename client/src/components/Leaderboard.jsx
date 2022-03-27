import React from "react";

const Leaderboard = () => {
  return (
    <div className="flex w-full justify-center items-center gradient-bg-services">
      <div className="flex mf:flex-row w-[70%] flex-col items-center justify-between md:p-20 py-12 px-4">
        <div className="flex-1 flex flex-col justify-start items-start">
          <h1 className="text-white text-2xl sm:text-5xl py-2 ">
            Leader Board
          </h1>

          <p className="text-left mt-6 text-white  md:w-9/12 w-11/12 font-semibold ">
            1)Muhammed Ali Nayir: +250300 ETM
          </p>
          <p className="text-left mt-3 text-white  md:w-9/12 w-11/12 font-semibold ">
            2)John Doe: +124320 ETM
          </p>
          <p className="text-left mt-3 text-white  md:w-9/12 w-11/12 font-semibold ">
            3)Lisa Doe: -23030 ETM
          </p>
        </div>

        <div className="flex-1 flex  flex-col justify-start items-start">
          <h1 className="text-white text-3xl sm:text-5xl py-2  ">
            Total Game Play
          </h1>

          <p className="text-left mt-6 text-white  md:w-9/12 w-11/12 font-semibold ">
            1)Muhammed Ali Nayir: 525 Games
          </p>
          <p className="text-left mt-3 text-white  md:w-9/12 w-11/12 font-semibold ">
            2)John Doe: 123 Games
          </p>
          <p className="text-left mt-3 text-white  md:w-9/12 w-11/12 font-semibold ">
            3)Lisa Doe: 52 Games
          </p>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
