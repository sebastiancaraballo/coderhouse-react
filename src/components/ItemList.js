import Item from "./Item";

function ItemList({items}) {
  return (
    <div className="grid place-items-center text-center">
      <div className="flex flex-row flex-wrap gap-3 w-3/4">
        {
          items.map((item) => {
            return (
              <Item
                id={item.id}
                title={item.title}
                description={item.description}
                price={item.price}
                pictureUrl={item.pictureUrl}
                stock={item.stock}
              />
            )
          })
        }
      </div>
    </div>
  );
}

export default ItemList;
