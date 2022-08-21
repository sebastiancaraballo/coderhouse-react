import { createContext, useState, useContext } from "react";

export const cartContext = createContext();
export function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(item, count) {
    let cartCopy = [...cart];
    cartCopy.push({ ...item, quantity: count });
    setCart(cartCopy);
  }

  function removeFromCart(item) {
    let cartCopy = [...cart];

    let index = cart.findIndex((cartItem, index) => {
      if (cartItem.id === item.id) {
        return true;
      }
    });

    cartCopy.splice(index, 1);

    setCart(cartCopy);
  }

  function isInCart(id) {
    return cart.some((item) => item.id === id);
  }

  function clear() {
    setCart([]);
  }

  return (
    <cartContext.Provider
      value={{
        cart: cart,
        addToCart: addToCart,
        isInCart: isInCart,
        removeFromCart: removeFromCart,
        clear: clear
      }}
    >
      {children}
    </cartContext.Provider>
  );
}
