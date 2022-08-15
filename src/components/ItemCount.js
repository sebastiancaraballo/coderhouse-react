import React, {useState} from 'react';
import RoundButton from './buttons/RoundButton';

function ItemCount({initial = 1, stock, callback}) {
  const [items, setItems] = useState(initial);

  function handleIncrement() {
    if (items === stock) {
      return items;
    } else {
      let newCount = items + 1;
      setItems(newCount);
      callback(newCount)
      return items;
    }
  }

  function handleDecrement() {
    if (items === 1) {
      return items;
    } else {
      let newCount = items - 1;
      setItems(newCount);
      callback(newCount)
      return items;
    }
  }

  return (
    <div className="grid grid-rows-2 grid-flow-col gap-x-2 border border-gray-400 p-2 w-36 rounded-lg">
      <div className="row-span-2 m-auto text-xl mr-6">{items}</div>
      <RoundButton callback={handleIncrement} roundDirection="rounded-t-lg" label={"+"}/>
      <RoundButton callback={handleDecrement} roundDirection="rounded-b-lg" label={"-"}/>
    </div>
  );
}

export default ItemCount;
