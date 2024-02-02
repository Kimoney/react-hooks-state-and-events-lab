import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(true);
  const listClassName = inCart ? "" : "in-cart";
  function handleClick(event) {
    console.log(event)
    setInCart((inCart) => !inCart)
  }
  return (
    <li className={listClassName}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>Add to Cart</button>
    </li>
  );
}

export default Item;
