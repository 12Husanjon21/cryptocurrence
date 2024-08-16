import React from "react";
import { IoEye } from "react-icons/io5";
import { TableCell, TableRow } from "flowbite-react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const CoinRow = ({ crypto, isSelected, onToggle }) => {
  const MySwal = withReactContent(Swal);
  const handleToggle = (crypto) => {
    onToggle(crypto);
    MySwal.fire({
      title: isSelected
        ? "Removed successfully from Watchlist and Carousel"
        : "Added successfully into Watchist and Carousel",
      icon: isSelected ? "warning" : "success",
      timer: 2500,
      showConfirmButton: false,
      toast: true,
      position: "top-end",
      background: "rgb(51 65 85)",
      color: "white",
      customClass: {
        popup: "colored-toast",
      },
    });
  };

  return (
    <TableRow className="border-b-[1px] border-[#515151] dark:bg-gray-800">
      <TableCell className="flex gap-x-4">
        <img
          src={crypto.image}
          alt={crypto.name}
          className="w-[50px] h-[50px]"
        />
        <Link to={`/crypto/${crypto.id}`} className="flex flex-col gap-y-[4px]">
          <h2 className="text=[22px]">{crypto.symbol.toUpperCase()}</h2>
          <h3 className="text-[14px] mb-2 text-[#A9A9A9]">{crypto.name}</h3>
        </Link>
      </TableCell>
      <TableCell className="text-end text-[14px] w-[320px]">
        {crypto.current_price}
      </TableCell>
      <TableCell className="text-end pr-2 w-[250px]">
        <div className="flex justify-end items-center">
          <button
            onClick={() => handleToggle(crypto)}
            className={`mx-4 ${isSelected ? "text-[#75F94C]" : "text-white"}`}
          >
            <IoEye className="text-2xl" />
          </button>
        </div>
      </TableCell>
      <TableCell className="pl-0">
        <p
          className={
            crypto.price_change_percentage_24h < 0
              ? "text-[#FF0000]"
              : "text-[#0ECA80]"
          }
        >
          {crypto.price_change_percentage_24h.toFixed(2)}%
        </p>
      </TableCell>
      <TableCell className="text-end">
        {crypto.market_cap.toLocaleString()}
      </TableCell>
    </TableRow>
  );
};

export default CoinRow;
