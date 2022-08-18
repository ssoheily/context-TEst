import React from "react";
import Navbar from "./Component/Navbar/Navbar";
import ProductsSection from "./Component/ProductsSection/ProductsSection";
import products from "./data/product";
import "./App.css";
import { useState } from "react";
import Toast from "./Component/Toast/Toast";
import Cart from "./Component/Cart/Cart";
/* 2- import Productcontext */

import productsContext from "./Context/Productscontext";
export default function App() {
  /* 3- create state */
  const [allProducts, setAllProducts] = useState(products);
  const [userCart, setUserCart] = useState([])/* cart fom user to add product-user */
  const [isShowToast, setIsShowToast] = useState(false)
  const [isShowCart, setIsShowCart] = useState(false)
  return (
    <div className="test">
      {/* 4- create Tag  <productsContext.Provider  ,then define state varaible */}
      <productsContext.Provider value={{
        allProducts,userCart,setUserCart,isShowToast, setIsShowToast,isShowCart, setIsShowCart
      }}>
        <Navbar /> 

        <main className="pb-5">
          <div className="container">
            <h1 className="text-center main-title">All Products</h1>
            {/* /*5- delete map , props   from here : {...product} */}
              <ProductsSection  />
          
          </div>
        </main>
        <Toast></Toast>
        <Cart></Cart>
      </productsContext.Provider>
    </div>
  );
}
