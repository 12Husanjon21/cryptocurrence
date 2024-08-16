import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import LineChart from "../components/chart";
import Buttons from "../components/Buttons";

function SingleCryptoPage({ currency }) {
  const { coinId } = useParams();
  const [error, setError] = useState(null);
  const [crypto, setCrypto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCrypto = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/${coinId}`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setCrypto(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCrypto();
  }, [coinId]);

  if (loading)
    return (
      <div className="text-center py-10">
        <span className="loader"></span>
      </div>
    );
  if (error)
    return (
      <div className="flex flex-col gap-y-3 items-center justify-center min-h-screen text-center text-red-500">
        <span className="py-2 text-xl px-8 rounded-md bg-slate-800">
          To mutch requests {error}
        </span>
        <button
          className="ml-4 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-700"
          onClick={() => window.location.reload()}
        >
          Retry
        </button>
      </div>
    );

  if (!crypto)
    return <div className="text-center py-10 text-red-500">No data found</div>;

  const currencySymbols = {
    USD: "$",
    AED: "د.إ",
    RUB: "₽",
    EUR: "€",
  };

  const currencySymbol = currencySymbols[currency] || "$"; // Default to USD symbol if currency not found

  const currentPrice =
    crypto?.market_data?.current_price[currency.toLowerCase()];
  const marketCap = crypto?.market_data?.market_cap[currency.toLowerCase()];

  return (
    <main className="w-full p-6 grid grid-cols-1 sm:flex min-h-screen gap-x-10">
      <section className="flex-1 max-w-[447px] max-h-[786px] border-b-2 sm:border-b-0 sm:border-r-2 border-[#808080] text-white pr-4 pb-6">
        <div className="flex justify-center">
          <img
            src={crypto?.image?.large}
            alt={`${crypto?.name} logo`}
            className="max-w-[200px] max-h-[200px] object-cover rounded"
          />
        </div>
        <div>
          <h1 className="text-[48px] text-center font-bold mb-2">
            {crypto?.name}
          </h1>
          <p className="text-lg text-gray-500 mb-3">
            {crypto?.description?.en?.length > 188
              ? crypto?.description?.en?.slice(0, 188) + "..."
              : crypto?.description?.en}
          </p>
          <h1 className="text-[24px] font-bold mb-5">
            Rank: <span className="font-normal">{crypto?.market_cap_rank}</span>
          </h1>
          <h2 className="text-[24px] mb-5 font-bold">
            Current Price:{" "}
            <span className="font-normal">
              <span className="ml-2 text-2xl">{currencySymbol}</span>
              {currentPrice?.toLocaleString()}
            </span>
          </h2>
          <h3 className="text-[24px] mb-5 font-bold">
            Market Cap:{" "}
            <span className="font-normal">
              <span className="ml-2 text-2xl">{currencySymbol}</span>
              {marketCap?.toLocaleString()}
            </span>
          </h3>
        </div>
      </section>
      <section className="mt-2 flex-1 max-w-[963px] ">
        <div className="w-full">
          <LineChart />
        </div>
        <Buttons />
      </section>
    </main>
  );
}

export default SingleCryptoPage;
