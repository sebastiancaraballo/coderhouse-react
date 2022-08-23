import React, { useContext } from "react";
import { cartContext } from "../store/cartContext";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";
import EmptyCart from "./EmptyCart";

function Cart() {
  const { cart } = useContext(cartContext);

  return (
    <div className="m-auto w-3/4 mt-12">
      {cart.length === 0 ? (
        <EmptyCart />
      ) : (
        <div>
          <div>
            {cart.map((item) => {
              return <CartItem item={item} />;
            })}
          </div>
          <div>
            <CartTotal cart={cart} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
