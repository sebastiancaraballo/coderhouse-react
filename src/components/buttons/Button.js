function Button({callback, label}) {
  return (
    <div onClick={callback} className="grid grid-rows-2 grid-flow-col border border-gray-400 w-fit h-12 rounded-lg cursor-pointer">
      <div className="row-span-2 my-auto mx-6 text-sm hover:text-highlight font-bold">{label}</div>
    </div>
  );
}

export default Button;
