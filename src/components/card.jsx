import React from "react";
export default function card(){
    return(
        <div className="card-border">
        <span className="image-section">
          <img src="./images/photo.jpg"alt="" className="i1" />
        </span>
        <p className="desc">Black Fanatasy SweatShirt</p>
        <span className="price-desc">
          <p className="price">$200</p>
          <img src="./images/cart.svg" alt="" className="cart" />
        </span>
      </div>
    );
}