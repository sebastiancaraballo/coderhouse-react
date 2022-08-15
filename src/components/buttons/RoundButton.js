function RoundButton({callback, roundDirection, label}) {
  return (
    <div onClick={callback} className={`cursor-pointer select-none hover:text-highlight ${roundDirection} w-10 hover:bg-zinc-200 font-bold text-center`}>
      {label}
    </div>
  );
}

export default RoundButton;
