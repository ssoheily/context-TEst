import React from "react";
import "./ProductsSection.css";

export default function ProductsSection({title,infos}) {

  return (  
    <div className="row justify-content-center  mt-5">
      <h3 className="text-center">{title}</h3>
      {/* now show product */}
      {
        infos.map(info=>(

          <div className="col-xl-3 col-lg-4 col-md-5 col-sm-10 mt-5">
          <div className="card py-3 px-3">
            <div className="col-12 text-center">
              <img src="/images/item-1.jpeg" alt="product Image" className="card-img-top w-75 " />
            </div>
             <div className=" card-body text-center">
              <p className="card-text">{info.title}</p>
              <p className="price">{info.price}</p>
              <br />
              <a href="#" className="btn btn-danger">Add To Cart</a>
              <a href="#" className="btn btn-outline-dark mt-3 text-capitalize"> More Information</a>
             <p className="number">{info.count} </p>
             </div> 
          </div>
        </div>


        ))
      }

      {/* <div className="col-xl-3 col-lg-4 col-md-5 col-sm-10 mt-5">
        <div className="card py-3 px-3">
          <div className="col-12 text-center">
            <img src="/images/item-1.jpeg" alt="product Image" className="card-img-top w-75 " />
          </div>
           <div className=" card-body text-center">
            <p className="card-text">{infos.title}</p>
            <p className="price">{infos.price}</p>
            <br />
            <a href="#" className="btn btn-danger">Add To Cart</a>
            <a href="#" className="btn btn-outline-dark mt-3 text-capitalize"> More Information</a>
           <p className="number">{infos.count} </p>
           </div> 
        </div>
      </div> */}
    </div>
  );
}
