function RoundButton({callback, roundDirection, label}) {
  return (
    <div onClick={callback} className={`cursor-pointer select-none hover:text-highlight ${roundDirection} bg-slate-300 w-10 hover:bg-zinc-200 font-bold`}>
      {label}
    </div>
  );
}

export default RoundButton;
