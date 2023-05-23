import React from "react";
import "../css/card.css";
import product from "../Data/data.js";


function Card() {
  
  return (
    <>
      
        {product.map((a) => {
          return (
            <>
              <div className="card ">
                <div className="card-img">
                  <img id="pic-front" src={a.imgf}></img>
                  <img id="pic-back" src={a.imgb}></img>
                  <a>
                    <button className="card-btn hidden">Add to Cart</button>
                  </a>
                </div>
                <p>Levi's essential westren denim shirt</p>
                <strong>
                  <span>$10.00</span>
                </strong>
              </div>
            </>
          );
        })}
     
    </>
  );
}

export default Card;
