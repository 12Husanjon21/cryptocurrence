import React from "react";

const Buttons = () => {
  return (
    <>
      <div className="flex gap-x-10 mt-6">
        <button className="border text-start w-full border-[#87CEEB] active:bg-[#87CEEB] active:text-black text-white font-bold py-2 px-4 rounded">
          24 Hours
        </button>
        <button className="border text-start w-full border-[#87CEEB] active:bg-[#87CEEB] active:text-black text-white font-bold py-2 px-4 rounded">
          30 Days
        </button>
        <button className="border text-start w-full border-[#87CEEB] active:bg-[#87CEEB] active:text-black text-white font-bold py-2 px-4 rounded">
          3 Months
        </button>
        <button className="border text-start w-full border-[#87CEEB] active:bg-[#87CEEB] active:text-black text-white font-bold py-2 px-4 rounded">
          1 Year
        </button>
      </div>
    </>
  );
};

export default Buttons;
