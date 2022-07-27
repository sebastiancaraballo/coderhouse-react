import Cart from "../assets/icons/cart.svg";

function SecondaryHeader({count = 0}) {
  return (
    <div className="flex flex-row-reverse mt-3 mr-6 -mb-4">
      <a href="#" className="absolute m-auto">
        <span className="absolute z-20 ml-[23px] mt-0.5 text-white">{ count }</span>
        <img src={Cart} className="w-12 relative z-10"></img>
      </a>
    </div>
  );
}

export default SecondaryHeader;
