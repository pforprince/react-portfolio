import React from "react";
import product from ".././images/product.png";

function Tile() {
  return (
    <div className="tile">
      <img src={product} alt="" />
      <h4>Product Design</h4>
      <p>Product Design is an important part in any startup</p>
      {/* <p className="tile-details">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non ullam, ea,
        a aperiam recusandae assumenda vero facere maiores molestias perferendis
        quasi officia voluptas quam est optio consectetur? Nihil, ducimus natus!
      </p> */}
    </div>
  );
}

export default Tile;
