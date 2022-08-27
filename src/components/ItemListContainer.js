import { useEffect } from "react";
import React, { useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import categories from "../data/categories.json";
import {
  getItemsDB,
  getItemsByCategoryIdDB,
} from "../services/itemsCollection";
import { Wobble } from "@uiball/loaders";

function getItems(categoryName) {
  return new Promise((resolve) => {
    let category = categories.find((category) => category.name == categoryName);

    if (category == undefined) {
      return getItemsDB(resolve);
    } else {
      return getItemsByCategoryIdDB(resolve, category.id);
    }
  });
}

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const categoryName = useParams().categoryName;

  useEffect(() => {
    getItems(categoryName).then((response) => {
      setItems(response);
    });
  }, [categoryName]);

  return (
    <div className="mt-12">
      {items.length > 0 ? (
        <ItemList items={items} />
      ) : (
        <div className="m-auto w-fit">
          <Wobble size={45} speed={0.9} color="black" />
        </div>
      )}
    </div>
  );
}

export default ItemListContainer;
