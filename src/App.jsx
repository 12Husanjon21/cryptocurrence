import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SingleCryptoPage from "./pages/SingleCryptoPage";
import Header from "./components/Header";

function App() {
  const [currency, setCurrency] = useState("USD");

  const handleCurrencyChange = (newCurrency) => {
    setCurrency(newCurrency.toUpperCase());
  };

  return (
    <Router>
      <div className="flex justify-center mb-12">
        <Header
          onCurrencyChange={handleCurrencyChange}
          selectedCurrency={currency}
        />
      </div>
      <Routes>
        <Route path="/" element={<HomePage currency={currency} />} />
        <Route
          path="/crypto/:coinId"
          element={<SingleCryptoPage currency={currency} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
