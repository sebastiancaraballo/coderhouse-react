import { useEffect } from "react";
import React, {useState} from 'react';
import bonsai from "../services/bonsai";
import ItemDetail from "./ItemDetail";

function getItem() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(bonsai), 2000);
  });
}

function ItemDetailContainer() {
  const [response, setResponse] = useState();

  useEffect(() => {
    getItem().then((res) => {
      setResponse(res);
    }).catch((error) => {
      console.log(error)
    });
  }, []);

  if(response){
    return (
      <div className="mt-8 md:mt-24">
        <ItemDetail item={response}/>
      </div>
    )
  } else {
    return null;
  }
}

export default ItemDetailContainer;
