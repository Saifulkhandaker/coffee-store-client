
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyC8ddQEIPwvyzCa7WBLe6qN4TK4HYNd1UM",
  authDomain: "coffee-store-12b7b.firebaseapp.com",
  projectId: "coffee-store-12b7b",
  storageBucket: "coffee-store-12b7b.appspot.com",
  messagingSenderId: "197979561895",
  appId: "1:197979561895:web:ac57fb2e9db1ce2d176082"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;