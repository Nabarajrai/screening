import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import TodosContextProvider from "./context/TodoContext.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TodosContextProvider>
      <App />
    </TodosContextProvider>
  </React.StrictMode>
);
