import 'dotenv/config';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

export const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "react-ecommerce-fd580.firebaseapp.com",
  projectId: "react-ecommerce-fd580",
  storageBucket: "react-ecommerce-fd580.appspot.com",
  messagingSenderId: "745439668950",
  appId: "1:745439668950:web:876fae2df38b9fb17cf777",
  measurementId: "G-D99RLRF06L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

