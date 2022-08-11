import { useEffect } from "react";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import items from "../data/items.json";
import ItemDetail from "./ItemDetail";

function getItem(itemId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(items.find((item) => item.id == itemId)), 500);
  });
}

function ItemDetailContainer() {
  const [response, setResponse] = useState();
  const itemId = useParams().itemId;

  useEffect(() => {
    getItem(itemId)
      .then((res) => {
        setResponse(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (response) {
    return (
      <div className="mt-8 md:mt-24">
        <ItemDetail item={response} />
      </div>
    );
  } else {
    return null;
  }
}

export default ItemDetailContainer;
