import React, { useContext } from "react";
import { cartContext } from "../store/cartContext";
import closeIcon from "../assets/icons/close.svg";

function CartItem({ item }) {
  const image = require(`../assets/images/${item.pictureUrl}`);
  const { removeFromCart } = useContext(cartContext);

  function handleRemoveFromCart() {
    removeFromCart(item);
  }

  return (
    <div className="grid m-auto grid-cols-1 md:grid-cols-4 shadow-sm bg-white mb-3 p-4 gap-6">
      <div className="flex flex-col m-auto">
        <img className="max-h-[6rem]" src={image}></img>
      </div>
      <div className="flex flex-col m-auto">{`${item.title} (${item.quantity})`}</div>
      <div className="flex flex-col m-auto">$ {item.price * item.quantity}</div>
      <div onClick={handleRemoveFromCart} className="flex flex-col m-auto w-6 cursor-pointer">
        <img src={closeIcon}></img>
      </div>
    </div>
  );
}

export default CartItem;
