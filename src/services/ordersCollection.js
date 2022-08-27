import firestoreDB from "../services/firebase";
import { addDoc, collection } from "firebase/firestore";

export async function insertDB(order) {
  const collectionRef = collection(firestoreDB, "orders");
  return addDoc(collectionRef, order);
}
