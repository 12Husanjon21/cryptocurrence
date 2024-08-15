import React from "react";
import { Carousel } from "flowbite-react";

const CarouselComponent = ({ selectedCryptos, currency }) => {
  const currencySymbols = {
    USD: "$",
    AED: "د.إ",
    RUB: "₽",
    EUR: "€",
  };

  const currencySymbol = currencySymbols[currency] || "$";

  // Duplikatlarni olib tashlash
  const uniqueCryptos = Array.from(
    new Set(selectedCryptos.map((c) => c.id))
  ).map((id) => {
    return selectedCryptos.find((c) => c.id === id);
  });

  const slides = [];

  // Har bir slidega 4tadan crypto qo'shiladi
  for (let i = 0; i < uniqueCryptos.length; i += 4) {
    slides.push(uniqueCryptos.slice(i, i + 4));
  }

  return (
    <div className="h-48 sm:h-64 w-full bg-inherit mb-10">
      <Carousel slideInterval={3000}>
        {slides.map((slide, index) => (
          <div key={index} className="flex justify-center gap-x-40">
            {slide.map((crypto) => (
              <div
                key={crypto.id}
                className="flex flex-col items-center bg-inherit p-4 rounded-md"
              >
                <img
                  src={crypto.image}
                  alt={crypto.name}
                  className="w-20 h-20"
                />
                <div className="flex items-center gap-x-[5px]">
                  <h3 className="text-white mt-2">
                    {crypto.symbol.toUpperCase()}
                  </h3>
                  <p
                    className={`${
                      crypto.price_change_percentage_24h < 0
                        ? "text-[#FF0000]"
                        : "text-[#0ECA80]"
                    } mt-[4px] text-[15px]`}
                  >
                    {crypto.price_change_percentage_24h.toFixed(2)}%
                  </p>
                </div>
                <p className="text-white text-[22px] font-medium">
                  {currencySymbol}
                  {crypto.current_price}
                </p>
              </div>
            ))}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
