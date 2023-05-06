import React, { useState } from "react";
import CoinItem from "./CoinItem";
import Spinner from "./Spinner";

const CoinSearch = ({ coins, loading }) => {
  const [searchCoin, setSearchCoin] = useState("");
  if (loading) {
    return <Spinner />;
  }
  return (
    <div className="rounded-div my-4">
      <div className="flex flex-col md:flex-row justify-between pt-4 pb-6 text-center md:text-right">
        <h1 className="text-2xl font-bold my-2">Search Crypto</h1>
        <form>
          <input
            type="text"
            placeholder="search a coin"
            className="w-full bg-primary border border-input px-4 py-2 rounded-2xl shadow-xl"
            onChange={(e) => setSearchCoin(e.target.value)}
          />
        </form>
      </div>
      <table className="w-full border-collapse text-center">
        <thead>
          <tr className="border-b">
            <th></th>
            <th className="px-4">#</th>
            <th className="text-left">coin</th>
            <th></th>
            <th>price</th>
            <th>24th</th>
            <th className="hidden md:table-cell">24th Volume</th>
            <th className="hidden sm:table-cell">MKT</th>
            <th>last 7 days</th>
          </tr>
        </thead>
        <tbody>
          {coins
            .filter((value) => {
              if (searchCoin === "") {
                return value;
              } else if (
                value.name.toLowerCase().includes(searchCoin.toLowerCase())
              ) {
                return value;
              }
            })
            .map((coin) => (
              <CoinItem coin={coin} key={coin.id} />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoinSearch;
