import { initializeApp } from "firebase/app";

// Use `import.meta.env` for environment variables in Vite.
const firebaseConfig = {
  apiKey:"AIzaSyAe-WFTojLv6CVtCqhdUZ4DHmc8941yN88",
  authDomain:"super-shope.firebaseapp.com",
  projectId:"super-shope",
  storageBucket:"super-shope.firebasestorage.app",
  messagingSenderId:"904517440556",
  appId:"1:904517440556:web:feffda3114539947c26d89",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log("Environment Variables:", import.meta.env);

console.log(import.meta.env.VITE_apiKey,'here');

console.log("Firebase Config:", firebaseConfig);

export { app };
