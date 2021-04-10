import React from "react";
import ReactDOM from "react-dom";
import App from "./app/components/App";
import "./styles.css";
import { Provider } from "react-redux";
import firebase from "firebase";
import { store } from "./app/store";

const firebaseConfig = {
  apiKey: "AIzaSyDrJ61BLXuJn1gILD9ogiCzjrxpSzmgQjo",
  authDomain: "traveling-team.firebaseapp.com",
  databaseURL:
    "https://traveling-team-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "traveling-team",
  storageBucket: "traveling-team.appspot.com",
  messagingSenderId: "802795943126",
  appId: "1:802795943126:web:8d7be33dd9f25fa82bc577",
  measurementId: "G-W9SSHW6JEZ",
};

firebase.initializeApp(firebaseConfig);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
