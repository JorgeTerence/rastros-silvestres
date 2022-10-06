import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getStorage } from "firebase/storage";
import { createContext } from "react";

const app = initializeApp({
  apiKey: "AIzaSyCERhGjW44z8SeVPWV2-Sejjjk2S2EhEvE",
  authDomain: "rastros-silvestres-e6837.firebaseapp.com",
  projectId: "rastros-silvestres-e6837",
  storageBucket: "rastros-silvestres-e6837.appspot.com",
  messagingSenderId: "624863156234",
  appId: "1:624863156234:web:76457497ad3056849167f3",
  measurementId: "G-MWQCLT4MVY"
});

const db = getFirestore(app);
const storage = getStorage(app)

export const DBContext = createContext(db);
export const StorageContext = createContext(storage);

