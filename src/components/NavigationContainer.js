import { useEffect } from "react";
import React, { useState } from "react";
import categories from "../data/categories.json";
import Navigation from "./Navigation";

function getItems() {
  return new Promise((resolve) => {
    resolve(categories);
  });
}

function NavigationContainer() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems().then((response) => {
      setItems(response);
    });
  }, []);

  return (
    <Navigation items={items}/>
  );
}

export default NavigationContainer;
