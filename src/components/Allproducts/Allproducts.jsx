import React from "react";
import { Link } from "react-router-dom";
import "./allproducts.css";

const Allproducts = ({ allProductsData, addToCart }) => {
  return (
    <>
      <h1 className="page-header">Tüm Ürünler</h1>
      <div className="container grid3">
        {allProductsData.map((product, index) => {
          return (
            <div className="box" key={index}>
              <div className="product mtop">
                <div className="img">
                  <span className="discount">{product.discount}</span>
                  <img src={product.img} alt="product-image" />
                </div>
                <div className="product-details">
                  <h3>{product.name}</h3>
                  <Link to={`/all-products/${product.id}`}>
                    <h5>Daha fazla bilgi için buraya tıklayın</h5>
                  </Link>
                  <div className="rate">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <div className="price">
                    <h4>{product.price}</h4>
                    <button
                      aria-label="Add to cart"
                      onClick={() => addToCart(product)}
                    >
                      <i className="fa fa-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Allproducts;
