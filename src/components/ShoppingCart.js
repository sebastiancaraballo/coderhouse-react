import Cart from "../assets/icons/cart.svg";
import { cartContext } from "../store/cartContext";
import { Link } from "react-router-dom";
import React, { useState, useContext, useEffect } from "react";

function ShoppingCart() {
  const { cart } = useContext(cartContext);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let total = cart.reduce((prev, current) => prev + current.quantity, 0);
    setTotalItems(total);
  }, [cart]);

  if (totalItems > 0) {
    return (
      <div className="flex flex-row-reverse mt-3 mr-6 -mb-4">
        <Link to="/cart" className="absolute m-auto">
          <span className="absolute z-20 ml-[23px] -mt-0.5 text-white rounded-full bg-red-600 w-6 h-6 text-center font-bold">
            {totalItems}
          </span>
          <img src={Cart} className="w-12 relative z-10"></img>
        </Link>
      </div>
    );
  }
}

export default ShoppingCart;
