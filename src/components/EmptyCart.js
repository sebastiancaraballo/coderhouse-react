import LinkButton from "./buttons/LinkButton";
import { cartContext } from "../store/cartContext";
import React, { useContext } from "react";

function EmptyCart() {
  const { orderNumber, clean } = useContext(cartContext);

  function handleLinkHome() {
    clean();
  }

  return (
    <div className="m-auto w-3/4 mt-28">
      <h1 className="text-2xl text-center text-highlight">
        {orderNumber
          ? "Thank you for your purchase."
          : "Shopping cart is empty."}
      </h1>
      {orderNumber && (
        <p className="text-sm text-center mt-3">Reference: {orderNumber}</p>
      )}
      <br></br>
      <LinkButton label="Continue Shopping" link="/" callback={handleLinkHome} />
    </div>
  );
}

export default EmptyCart;
