import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RestaurantListPage from "./pages/RestaurantListPage";
import OrdersPage from "./pages/OrdersPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={"/restaurantList"} element={<RestaurantListPage />}></Route>
        <Route exact path={"/orders/:id"} element={<OrdersPage />}></Route>
        <Route path={"*"} element={<LoginPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
