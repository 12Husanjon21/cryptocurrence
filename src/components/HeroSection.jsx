import React from "react";
import { useSelector } from "react-redux";
import CarouselComponent from "./CarouselComponent";

export default function HeroSection({ currency }) {
  const selectedCryptos = useSelector(
    (store) => store.selectedCryptos.selectedCryptos
  );
  return (
    <div className="text-center h-[400px] pt-[59px] bgImage">
      <div>
        <h1 className="text-6xl mb-4 text-[#87CEEB] font-bold">
          CRYPTOFOLIO WATCH LIST
        </h1>
        <p className="font-medium text-[#A9A9A9]">
          Get all the Info regarding your favorite Crypto Currency
        </p>
      </div>
      <CarouselComponent selectedCryptos={selectedCryptos} />
    </div>
  );
}
