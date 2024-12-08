import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import ChartPage from "./CartPage";
import DetailPage from "./DetailPage";
import CheckoutPage from "./CheckoutPage";

function App() {

  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/detail/:id" element={<DetailPage/>} />
          <Route path="/cart" element={<ChartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;