import React from "react";
import CoinSearch from "../components/CoinSearch";
import Trending from "../components/Trending";

const Home = ({ coins, loading }) => {
  return (
    <div>
      <CoinSearch coins={coins} loading={loading} />
      <Trending />
    </div>
  );
};

export default Home;
