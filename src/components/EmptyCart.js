import LinkButton from "./buttons/LinkButton";

function EmptyCart() {
  return (
    <div className="m-auto w-3/4">
      <h1 className="text-2xl text-center">Shopping cart is empty.</h1>
      <br></br>
      <LinkButton label="Continue Shopping" link="/" />
    </div>
  );
}

export default EmptyCart;
