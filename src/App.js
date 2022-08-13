
import React from "react";
import Navbar from "./Component/Navbar/Navbar";
import ProductsSection   from "./Component/ProductsSection/ProductsSection";
import "./App.css"

export default function App() {

  return (
        <div className="test">
          <Navbar />
          
          <main className="pb-5">
            <div className="container">
              <h1 className="text-center main-title">
                All Products
              </h1>
              <ProductsSection title="Phone" />
              <ProductsSection title="Laptop" />
              <ProductsSection title="Monitor" />
              <ProductsSection title="Tablet" />
            </div>
          </main>
        </div> 
  );
}
