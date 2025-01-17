import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/navbar';
import AboutPage from './Components/AboutPage/AboutPage';
import HomePage from './Components/HomePage/homepage';
import Footer from './Components/Footer/footer';
import Page404 from './Components/Page404/Page404';
import './App.css';
import ERC721TokenHoldingsPage from './Components/ERC721TokenHoldingsPage/ERC721TokenHoldingsPage';
import WalletAnalyticsPage from './Components/WalletAnalyticsPage/WalletAnalyticsPage';
import ERC721LookupsPage from './Components/ERC721TokenLookupsPage/ERC721TokenLookupsPage';
import ERC720HoldingsPage from './Components/ERC20TokenHoldingsPage/ERC20TokenHoldingsPage';
import GasTrackerPage from './Components/GasPricesPage/GasPricesPage';
import WalletAnalyticsResultPage from './Components/WalletAnalyticsResultPage/WalletAnalyticsResultPage';
import MetricsNavbar from './Components/MetricsNavbar/MetricsNavbar';
import ArbPriceLookupPage from './Components/ArbPriceLookupPage/ArbPriceLookupPage';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <MetricsNavbar />
      <Router>
        <Routes>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/arb-price-lookup" element={<ArbPriceLookupPage />}></Route>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/erc20-token-holdings" element={<ERC720HoldingsPage />}></Route>
          <Route path="/erc721-token-holdings" element={<ERC721TokenHoldingsPage />}></Route>
          <Route path="/erc721-token-lookups" element={<ERC721LookupsPage />}></Route>
          <Route path="/gas-tracker" element={<GasTrackerPage />}></Route>
          <Route path="/wallet-analytics" element={<WalletAnalyticsPage />}></Route>
          <Route path="wallet-analytics-result" element={<WalletAnalyticsResultPage />}></Route>
          <Route path="*" element={<Page404 />}></Route>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;