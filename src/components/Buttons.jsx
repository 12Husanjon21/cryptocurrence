import React, { useState } from "react";

const Buttons = () => {
  const [selected, setSelected] = useState(null);

  const handleClick = (button) => {
    if (selected === button) {
      setSelected(null); // Agar tugma allaqachon tanlangan bo'lsa, holatni yana null ga o'zgartiramiz
    } else {
      setSelected(button); // Aks holda, tanlangan tugmani belgilaymiz
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-y-3 sm:flex gap-x-10 mt-6">
        {["24 Hours", "30 Days", "3 Months", "1 Year"].map((label) => (
          <button
            key={label}
            onClick={() => handleClick(label)}
            className={`border text-start w-full border-[#87CEEB] font-bold py-2 px-4 rounded ${
              selected === label ? "bg-[#87CEEB] text-black" : "text-white"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    </>
  );
};

export default Buttons;
