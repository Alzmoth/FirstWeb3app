import React from "react";

const Square = ({ label, i, j, setValue }) => {
  return (
    <div
      className={` ${
        label === "X" ? "border-2 border-red-800" : "border-2 border-black"
      }
    ' bg-gray-800 border-2 border-black-800 w-[60px] h-[60px] relative
    hover:cursor-pointer hover:scale-[105%] raunded-[5px]'`}
      onClick={() => setValue(i, j)}
    >
      <div
        className="absolute text-green-400 text-[14px] top-[50%] left-[50%] translate-x-[-50%]
      translate-y-[-50%]"
      >
        {label}
      </div>
    </div>
  );
};

export default Square;
