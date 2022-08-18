import React from "react";
import { useContext } from "react";
import productsContext from "../../Context/Productscontext";
import "./ProductsSection.css";
/* 8- delete props tiele  , infos as parameter here */
export default function ProductsSection() {
  /* 6- here define variable for context  */
  const contextData = useContext(productsContext);

  return (
    <>
      {/* 7- use state from productSection ,here and map for this " productSection " */}
      {contextData.allProducts.map((productSection) => (
        <div className="row justify-content-center  mt-5">
          <h3 className="text-center">{productSection.title}</h3>
          {/* now show product */}
          {productSection.infos.map((product) => (
            <div
              className="col-xl-3 col-lg-4 col-md-5 col-sm-10 mt-5"
              key={productSection.id}
            >
              <div className="card py-3 px-3">
                <div className="col-12 text-center">
                  <img
                    src={product.img}
                    alt="product Image"
                    className="card-img-top w-75 imgProduct"
                  />
                </div>
                <div className="card-body text-center">
                  <p className="card-text">{product.title}</p>
                  <p className="price">{product.price}</p>
                  <br />
                  {/* javascript:void(0) */}
                  <a
                    href="javascript:void(0)"
                    className="btn btn-danger"
                    onClick={() => {
                      contextData.setIsShowToast(true);

                      setTimeout(() => {
                        contextData.setIsShowToast(false);
                      }, 3000);

                      let isInUserCart = contextData.userCart.some(
                        (bagProduct) => bagProduct.title === product.title
                      );
                      if(!isInUserCart){
                        let newUserCardProduct = {
                          id: contextData.userCart.length + 1,
                          title: product.title,
                          price: product.price,
                          count: 1,
                        };
  
                        contextData.setUserCart((prevProduct) => [
                          ...prevProduct,
                          newUserCardProduct,
                        ]);
                      }
                      else{

                        let userCart =  [...contextData.userCart]
                        userCart.some(bagProduct=>{
                          if(bagProduct.title===product.title){
                            bagProduct.count++;
                            return true;
                          }
                          contextData.setUserCart(userCart);
                        })
                      }
                     
                    }}
                  >
                    Add To Cart
                  </a>
                  <a
                    href="#"
                    className="btn btn-outline-dark mt-3 text-capitalize"
                  >
                    {" "}
                    More Information
                  </a>
                  <p className="number">{product.count} </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </>
  );
}
