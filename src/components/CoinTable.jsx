// src/components/CoinTable.jsx
import React from "react";
import { customTheme } from "../utils";
import { Table, TableBody, TableHead, TableHeadCell } from "flowbite-react";
import CoinRow from "./CoinRow";

const CoinTable = ({ cryptos, selectedCryptos, onToggle }) => {
  return (
    <Table theme={customTheme} className="w-full">
      <TableHead className="h-[56px]">
        <TableHeadCell className="rounded-tl-[4px]">Coin</TableHeadCell>
        <TableHeadCell className="text-end">Price</TableHeadCell>
        <TableHeadCell className="text-end">24h</TableHeadCell>
        <TableHeadCell className="text-start pl-0">Change</TableHeadCell>
        <TableHeadCell className="rounded-tr-[4px] text-end dis-none">
          Market Cap
        </TableHeadCell>
      </TableHead>
      <TableBody className="divide-y">
        {cryptos.map((crypto) => (
          <CoinRow
            key={crypto.id}
            crypto={crypto}
            isSelected={selectedCryptos.some((c) => c.id === crypto.id)}
            onToggle={onToggle}
          />
        ))}
      </TableBody>
    </Table>
  );
};

export default CoinTable;
