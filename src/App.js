import React from "react";
import Navbar from "./Component/Navbar/Navbar";
import ProductsSection from "./Component/ProductsSection/ProductsSection";
import products from "./data/product"
import "./App.css";
import { useState } from "react";
import Toast from "./Component/Toast/Toast";
export default function App() {
  const [allProducts, setAllProducts]=useState(products)
  return (
    <div className="test">
      <Navbar />

      <main className="pb-5">
        <div className="container">
          <h1 className="text-center main-title">All Products</h1>
          {allProducts.map(product=>(
            <ProductsSection {...product } />
          ))}
      
        </div>
      </main>
      <Toast></Toast>
    </div>
  );
}
