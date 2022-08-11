import { useEffect } from "react";
import React, { useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import items from "../data/items.json";
import categories from "../data/categories.json";

function getItems(categoryName) {
  return new Promise((resolve) => {
    let category = categories.find((category) => category.name == categoryName)

    setTimeout(() => {
      if (category == undefined) {
        resolve(items);
      } else {
        resolve(items.filter((item) => item.categoryId == category.id));
      }
    }, 500);
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
      <ItemList items={items} />
    </div>
  );
}

export default ItemListContainer;
