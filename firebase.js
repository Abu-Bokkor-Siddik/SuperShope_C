/* eslint-disable no-undef */
// require('dotenv').config({ path: '.env.local' });
console.log(import.meta.env.Vite_apiKey);

import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey:import.meta.env.Vite_apiKey,
  authDomain:import.meta.env.Vite_authDomain,
  projectId:import.meta.env.Vite_projectId,
  storageBucket:import.meta.env.Vite_storageBucket,
  messagingSenderId:import.meta.env.Vite_messagingSenderId,
  appId:import.meta.env.Vite_appId,
};

console.log(firebaseConfig)
export  const app = initializeApp(firebaseConfig);