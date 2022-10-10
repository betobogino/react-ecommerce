import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, addDoc, getDocs, getDoc, query, where } from "firebase/firestore";
import { firebaseConfig } from './firebaseConfig';

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export const addProducts = async ({title, price, imageUrl, brand, model, description, stock, details, category}) => {
  try {
    //const docRef = await addDoc(collection(db, "products"), {
    await addDoc(collection(db, "products"), {
      title: title,
      price: price,
      imageUrl: imageUrl,
      brand: brand,
      model: model,
      description: description,
      stock: stock,
      details: details,
      category: category      
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export const getProduct = async (id) => {
  const products = await getDoc(doc(db, "products", id));
  
  return products;
}

export const getProducts = async () => {
  const products = await getDocs(collection(db, "products"));

  return products;
}

export const getProductsCategory = async (idCategory) => {
  const q = query(collection(db, "products"), where("category", "==", idCategory));
  
  const products = await getDocs(q);
  return products;
}

export const addOrder = async (data) => {
  try {
    const docRef = await addDoc(collection(db, "orders"), data);

    return docRef;
  } catch(error) {
    console.error(error)
  }
}