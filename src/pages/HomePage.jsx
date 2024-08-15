import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setError, add as addCryptos } from "../redux/cryptosSlice";
import {
  add as addSelectedCryptos,
  remove as removeCrypto,
} from "../redux/selectedCryptos";
import CoinTable from "../components/CoinTable";
import PaginationComponent from "../components/PaginationComponent";
import HeroSection from "../components/HeroSection";

export default function HomePage({ currency }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState(""); // Qidiruv so'zini saqlash uchun holat
  const itemsPerPage = 10; // Har bir sahifada ko'rsatiladigan elementlar soni

  const cryptos = useSelector((store) => store.cryptosReducer.cryptos);
  const selectedCryptos = useSelector(
    (store) => store.selectedCryptos.selectedCryptos
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchCryptos() {
      try {
        dispatch(setLoading(true));
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=200&page=1&sparkline=false`
        );
        const data = await response.json();
        dispatch(addCryptos(data));
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
      } catch (error) {
        dispatch(setError(error.message));
        console.error("Error fetching data:", error);
      } finally {
        dispatch(setLoading(false));
      }
    }
    fetchCryptos();
  }, [dispatch, currency]);

  const selectUnselectCrypto = (crypto) => {
    const isAlreadySelected = selectedCryptos.some(
      (selected) => selected.id === crypto.id
    );

    if (isAlreadySelected) {
      dispatch(removeCrypto(crypto.id));
    } else {
      dispatch(addSelectedCryptos(crypto));
    }
  };

  // Qidiruv so'ziga asoslangan filtrlash
  const filteredCryptos = cryptos.filter((crypto) =>
    crypto.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCryptos = filteredCryptos.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
    console.log(`Current page: ${page}`);
  };

  return (
    <main>
      <section>
        <HeroSection />
      </section>
      <section className="max-w-[1280px] bg-[#14161a] mx-auto ">
        <h2 className="text-center font-normal text-4xl my-4">
          Cryptocurrency Prices by Market Cap
        </h2>
        <div className="flex justify-between mb-[20px]">
          <input
            type="search"
            className="max-w-[1280px] h-16 w-full bg-inherit input rounded-[4px]"
            placeholder="Search For a Crypto Currency.."
            value={searchQuery} // Qidiruv so'zini inputga qo'yish
            onChange={(e) => setSearchQuery(e.target.value)} // Qidiruv so'zini yangilash
          />
        </div>
        <CoinTable
          cryptos={currentCryptos} // Sahifalangan va filtrlashdan o'tgan ma'lumotlar
          selectedCryptos={selectedCryptos}
          onToggle={selectUnselectCrypto}
        />
        <PaginationComponent
          currentPage={currentPage}
          totalPages={Math.ceil(filteredCryptos.length / itemsPerPage)}
          onPageChange={handlePageChange}
        />
      </section>
    </main>
  );
}
