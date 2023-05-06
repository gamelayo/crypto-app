import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import SignUp from "./pages/SignUp";
import Account from "./pages/Account";
import axios from "axios";
import { useEffect, useState } from "react";
import CoinPage from "./pages/CoinPage";
import Footer from "./components/Footer";
import { AuthContextProvider } from "./context/AuthContext";
function App() {
  const [coins, setCoins] = useState("");
  const [loading, setLoading] = useState(true);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true&locale=en";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setCoins(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return (
    <ThemeProvider>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home coins={coins} loading={loading} />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/account" element={<Account />} />
          <Route path="/coin/:coinId" element={<CoinPage />}>
            <Route path=":coinId" />
          </Route>
        </Routes>
        <Footer />
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default App;
