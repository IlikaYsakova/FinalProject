import React from "react";
import { Route, Routes } from "react-router-dom";
import AddProduct from "./Components/AddProduct/AddProduct";
import Login from "./Components/Auth/Login";
import CardDetails from "./Components/CardDetails/CardDetails";
import EditCard from "./Components/EditCard/EditCard";
import Home from "./Components/Home/Home";
import ProductsList from "./Components/Products/ProductsList";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<AddProduct />} />
      <Route path="/list" element={<ProductsList />} />
      <Route path="/login" element={<Login />} />
      <Route path="/list/details/:id" element={<CardDetails />} />
      <Route path="/edit/:id" element={<EditCard />} />
    </Routes>
  );
};

export default MainRoutes;
