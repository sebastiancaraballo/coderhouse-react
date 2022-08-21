import Cart from "../assets/icons/cart.svg";
import React, { useContext} from "react";
import { cartContext } from "../store/cartContext";

function ShoppingCart({count = 0}) {
  const { cart } = useContext(cartContext);

  return (
    <div className="flex flex-row-reverse mt-3 mr-6 -mb-4">
      <a href="#" className="absolute m-auto">
        <span className="absolute z-20 ml-[23px] -mt-0.5 text-white rounded-full bg-red-600 w-6 h-6 text-center font-bold">{ cart.reduce(
          (prev, current) => prev + current.quantity, 0
        ) }</span>
        <img src={Cart} className="w-12 relative z-10"></img>
      </a>
    </div>
  );
}

export default ShoppingCart;
