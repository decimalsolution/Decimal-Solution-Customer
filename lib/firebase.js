// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { v4 as uuidv4 } from "uuid"; // importing services

import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAqi8EioZAZgTT5MAhxqBUqYTpcEPUtO3M",
  authDomain: "decimal-solutions-8c191.firebaseapp.com",
  projectId: "decimal-solutions-8c191",
  storageBucket: "decimal-solutions-8c191.appspot.com",
  messagingSenderId: "674398346861",
  appId: "1:674398346861:web:0f1d877901c2d7e30da964",
  measurementId: "G-C7V3M8PVCB",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
// const analytics = getAnalytics(app);

export const uploadImage = async (file, folderName) => {
  if (file == null) {
    return null;
  }

  if (typeof file === "string") {
    return file;
  }

  if (typeof file === "object" && file?.length > 0) {
    file = file[0];
  }

  const storageRef = ref(storage, `${folderName}/${uuidv4() + file.name}`);
  const snapshot = await uploadBytes(storageRef, file);
  return await getDownloadURL(snapshot.ref);
};
