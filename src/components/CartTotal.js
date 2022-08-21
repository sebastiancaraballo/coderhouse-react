function CartTotal({ cart }) {
  function total(){
    return cart.reduce((prev, current) => prev + (current.price * current.quantity), 0);
  }

  return (
    <div className="grid m-auto grid-cols-1 md:grid-cols-4 shadow-sm bg-white mb-3 p-4">
      <div className="flex flex-col m-auto"></div>
      <div className="flex flex-col m-auto text-2xl">Total:</div>
      <div className="flex flex-col m-auto text-2xl">$ {total()}</div>
    </div>
  );
}

export default CartTotal;
