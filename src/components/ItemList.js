import Item from "./Item";
import { Link } from "react-router-dom";

function ItemList({items}) {
  return (
    <div className="grid text-center w-3/4 m-auto">
      <div className="flex flex-row justify-center flex-wrap gap-x-5 gap-y-5">
        {
          items.map((item) => {
            return (
              <Link to={`/item/${item.id}`}>
                <Item
                  id={item.id}
                  title={item.title}
                  description={item.description}
                  price={item.price}
                  pictureUrl={item.pictureUrl}
                  stock={item.stock}
                />
              </Link>
            )
          })
        }
      </div>
    </div>
  );
}

export default ItemList;
