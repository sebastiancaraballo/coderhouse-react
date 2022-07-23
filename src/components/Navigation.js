function Navigation() {
  return (
    <div className="grid place-items-center text-center">
      <ul className="flex flex-row flex-wrap gap-3 w-4/5">
        <li className="flex-auto hover:text-highlight text-slate-700">
          <a href="#">FLORALS</a>
        </li>
        <li className="flex-auto hover:text-highlight text-slate-700">
          <a href="#">SUCCULENTS</a>
        </li>
        <li className="flex-auto hover:text-highlight text-slate-700">
          <a href="#">ORCHARD</a>
        </li>
        <li className="flex-auto hover:text-highlight text-slate-700">
          <a href="#">FRUIT TREES</a>
        </li>
        <li className="flex-auto hover:text-highlight text-slate-700">
          <a href="#">BONSAI</a>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
