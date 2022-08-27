import React, { useContext } from "react";
import { cartContext } from "../store/cartContext";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";
import EmptyCart from "./EmptyCart";
import CheckoutForm from "./CheckoutForm";

function Cart() {
  const { cart } = useContext(cartContext);

  return (
    <div className="m-auto w-3/4 mt-12">
      {cart.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="flex flex-col md:col-start-1 md:col-end-3">
            <div>
              {cart.map((item) => {
                return <CartItem item={item} />;
              })}
            </div>
            <div>
              <CartTotal cart={cart} />
            </div>
          </div>
          <div className="flex flex-col md:col-start-3 md:col-end-4 ml-3">
            <CheckoutForm />
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
