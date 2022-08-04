import { useEffect } from "react";
import React, {useState} from 'react';
import ItemList from "./ItemList";
import florals from "../services/florals";

function getFlorals() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(florals);
    }, 2000);
  });
}

function ItemListContainer() {
  const [florals, setFlorals] = useState([]);

  useEffect(() => {
    getFlorals().then((response) => {
      setFlorals(response);
    });
  }, []);

  return (
    <div className="mt-12">
      <ItemList items={florals}/>
    </div>
  );
}

export default ItemListContainer;
