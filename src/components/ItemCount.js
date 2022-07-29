import React, {useState} from 'react';
import RoundButton from './buttons/RoundButton';

function ItemCount({initial, stock, callback}) {
  const [items, setItems] = useState(initial);

  function handleIncrement() {
    if (items === stock) {
      return items;
    } else {
      setItems(items + 1);
      callback()
      return items;
    }
  }

  function handleDecrement() {
    if (items === 1) {
      return items;
    } else {
      setItems(items - 1);
      callback()
      return items;
    }
  }

  return (
    <div className="grid grid-rows-2 grid-flow-col m-auto gap-x-2 border-2 border-slate-300 p-2 w-36">
      <div className="row-span-2 m-auto text-xl mr-6">{items}</div>
      <RoundButton callback={handleIncrement} roundDirection="rounded-t-lg" label={"+"}/>
      <RoundButton callback={handleDecrement} roundDirection="rounded-b-lg" label={"-"}/>
    </div>
  );
}

export default ItemCount;
