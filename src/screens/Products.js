import React from "react";
import Card from "../components/Card";
import "../css/product.css";

function Products() {
  return (
    <>
      <div className="container">
        <h1>OUR LATEST PRODUCTS</h1>
        <p>
          Latest products with export quality stuff on reasonable price value
        </p>
      </div>
      <div className="container-items">
        <Card/>
      </div>
     
    </>
  );
}

export default Products;
