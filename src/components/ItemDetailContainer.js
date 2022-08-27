import { useEffect } from "react";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getItemsByIdDB } from "../services/itemsCollection";
import { Wobble } from "@uiball/loaders";

function getItem(itemId) {
  return new Promise((resolve) => {
    return getItemsByIdDB(resolve, itemId);
  });
}

function ItemDetailContainer() {
  const [response, setResponse] = useState(undefined);
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

  return (
    <div className="mt-8 md:mt-24">
      {response != undefined ? (
        <ItemDetail item={response} />
      ) : (
        <div className="m-auto w-fit">
          <Wobble size={45} speed={0.9} color="black" />
        </div>
      )}
    </div>
  );
}

export default ItemDetailContainer;
