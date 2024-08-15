import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Drawer, Dropdown } from "flowbite-react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../redux/selectedCryptos";

const Header = ({ onCurrencyChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const selectedCryptos = useSelector(
    (store) => store.selectedCryptos.selectedCryptos
  );
  const dispatch = useDispatch();

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const handleCurrencySelect = (currency) => {
    setSelectedCurrency(currency);
    onCurrencyChange(currency); // Yangi valyutani App ga yuboramiz
  };

  const handleRemove = (id) => {
    dispatch(remove(id)); // Redux orqali tanlangan kriptovalyutani olib tashlash
  };

  const uniqueCryptos = Array.from(
    new Set(selectedCryptos.map((crypto) => crypto.id))
  ).map((id) => selectedCryptos.find((crypto) => crypto.id === id));

  return (
    <>
      <header className="bg-[#15171B] h-[64px] text-white z-10 shadow-md fixed w-full">
        <div className="flex justify-between items-center px-4 py-2 pt-[10px] max-w-[900px] mx-auto">
          <Link
            to="/"
            className="text-2xl pb-[5px] text-[#87CEEB] font-semibold"
          >
            CRYPTOFOLIO
          </Link>
          <div className="flex gap-x-3">
            <Dropdown
              className="bg-[#14161a] hover:bg-[#22252c] text-white border-gray-400"
              label={selectedCurrency}
              inline
            >
              {["USD", "AED", "RUB", "EUR"].map((currency) => (
                <Dropdown.Item
                  key={currency}
                  className="text-white hover:text-black font-medium"
                  onClick={() => handleCurrencySelect(currency)}
                >
                  {currency}
                </Dropdown.Item>
              ))}
            </Dropdown>
            <Button
              className="bg-[#87CEEB] px-4 text-base text-black font-medium"
              onClick={handleOpen}
            >
              WATCHLIST
            </Button>
          </div>
        </div>
      </header>
      <Drawer
        open={isOpen}
        onClose={handleClose}
        position="right"
        className="bg-[#515151] text-white w-[500px]"
      >
        <h1 className="font-medium text-3xl text-center mb-4">WATCHLIST</h1>
        <div className="px-4">
          <ul className="grid grid-cols-2 gap-x-10 gap-y-8">
            {uniqueCryptos.length > 0 ? (
              uniqueCryptos.map((coin) => (
                <li
                  key={coin.id}
                  className="bg-[#14161a] rounded-[25px] flex flex-col items-center justify-center px-10 py-4"
                >
                  <img src={coin.image} alt={coin.name} className="max-h-28" />
                  <p className="text-[20px] font-normal mt-9 mb-4">
                    {coin.current_price}
                  </p>
                  <button
                    className="text-white hover:opacity-55 active:opacity-90 bg-[#FF0000] px-5 py-1"
                    onClick={() => handleRemove(coin.id)}
                  >
                    Remove
                  </button>
                </li>
              ))
            ) : (
              <li className="col-span-2 text-center py-4">No coins selected</li>
            )}
          </ul>
        </div>
      </Drawer>
    </>
  );
};

export default Header;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { Button, Drawer, Dropdown } from "flowbite-react";
// import { useSelector } from "react-redux";

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const selectedCryptos = useSelector(
//     (store) => store.selectedCryptos.selectedCryptos
//   );

//   const handleOpen = () => setIsOpen(true);
//   const handleClose = () => setIsOpen(false);

//   return (
//     <>
//       <header className="bg-[#15171B] h-[64px] text-white z-10 shadow-md fixed w-full">
//         <div className="flex justify-between items-center px-4 py-2 pt-[10px] max-w-[900px] mx-auto">
//           <Link
//             to="/"
//             className="text-2xl pb-[5px] text-[#87CEEB] font-semibold"
//           >
//             CRYPTOFOLIO
//           </Link>
//           <div className="flex gap-x-3">
//             <Dropdown
//               className="bg-[#14161a] hover:bg-[#22252c] text-white border-gray-400"
//               label="USD"
//               inline
//             >
//               <Dropdown.Item className="text-white hover:text-black font-medium">
//                 AED
//               </Dropdown.Item>
//               <Dropdown.Item className="text-white hover:text-black font-medium">
//                 RUB
//               </Dropdown.Item>
//               <Dropdown.Item className="text-white hover:text-black font-medium">
//                 EUR
//               </Dropdown.Item>
//             </Dropdown>
//             <Button
//               className="bg-[#87CEEB] px-4 text-base text-black font-medium"
//               onClick={handleOpen}
//             >
//               Watchlist
//             </Button>
//           </div>
//         </div>
//       </header>
//       <Drawer
//         open={isOpen}
//         onClose={handleClose}
//         position="right"
//         className="bg-[#15171B] text-white"
//       >
//         <h1 className="font-medium text-3xl text-center mb-4">WATCHLIST</h1>
//         <div className="px-4">
//           <ul>
//             {selectedCryptos.length > 0 ? (
//               selectedCryptos.map((coin) => (
//                 <li key={coin.id} className="border-b border-gray-700 py-2">
//                   {coin.name}
//                 </li>
//               ))
//             ) : (
//               <li className="text-center py-4">No coins selected</li>
//             )}
//           </ul>
//         </div>
//       </Drawer>
//     </>
//   );
// };

// export default Header;
