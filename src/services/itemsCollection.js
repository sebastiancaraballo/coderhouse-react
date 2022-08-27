import firestoreDB from "../services/firebase";
import { getDocs, collection, query, where, getDoc, doc, setDoc } from "firebase/firestore";

export function getItemsDB(resolve) {
  const itemsCollection = collection(firestoreDB, "items");

  getDocs(itemsCollection).then((snapshot) => {
    const itemsData = snapshot.docs.map((doc) => {
      return { ...doc.data(), id: doc.id };
    });
    resolve(itemsData);
  });
}

export function getItemsByCategoryIdDB(resolve, categoryId) {
  const itemsCollection = collection(firestoreDB, "items");

  const q = query(itemsCollection, where('categoryId', '==', categoryId));

  getDocs(q).then((snapshot) => {
    const itemsData = snapshot.docs.map((doc) => {
      return { ...doc.data(), id: doc.id };
    });
    resolve(itemsData);
  });
}

export function getItemsByIdDB(resolve, id) {
  const itemsCollection = collection(firestoreDB, "items");

  const docRef = doc(itemsCollection, id);

  getDoc(docRef).then(snapshot => {
    resolve({ ...snapshot.data(), id: snapshot.id });
  });
}

export function insertDB(resolve, item) {
  setDoc(doc(firestoreDB, "items", item.id), {
    title: item.title,
    description: item.description,
    price: item.price,
    pictureUrl: item.pictureUrl,
    stock: item.stock,
    categoryId: item.categoryId
  }).then(resolve());
}
