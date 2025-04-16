import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

console.log("React is mounting..."); // ✅ Kiểm tra log

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
console.log("React has been mounted!"); // ✅ Kiểm tra log
