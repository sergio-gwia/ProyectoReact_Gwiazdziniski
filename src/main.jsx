import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { initializeApp } from "firebase/app";
import ShopProvider from "./Context/ShopProvider"

const firebaseConfig = {
  apiKey: "AIzaSyB-D2RW1OetwARPFtyIY37LpvoiWGQ9Y0Y",
  authDomain: "fvsport-ccb3f.firebaseapp.com",
  projectId: "fvsport-ccb3f",
  storageBucket: "fvsport-ccb3f.appspot.com",
  messagingSenderId: "829175927902",
  appId: "1:829175927902:web:6bd82ca51e66f2319850cf"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
    <ShopProvider>
    <App />
    </ShopProvider>
      
  //</React.StrictMode>,
)
